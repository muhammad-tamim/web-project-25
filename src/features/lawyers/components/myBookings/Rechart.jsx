import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const Rechart = ({ lawyers }) => {

    const colors = [
        "#6366F1", // Indigo
        "#10B981", // Emerald
        "#F59E0B", // Amber
        "#EF4444", // Red
        "#3B82F6", // Blue
        "#8B5CF6", // Violet
        "#14B8A6", // Teal
        "#EC4899", // Pink
        "#22C55E", // Green
        "#EAB308", // Yellow
        "#0EA5E9", // Sky
        "#A855F7", // Purple
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='flex justify-center rounded-2xl border border-primary-content/15 mt-8 p-2 md:p-8'>
            <BarChart
                style={{ width: '100%', maxHeight: '60vh', aspectRatio: 1.618 }}
                responsive
                data={lawyers}
            >
                <CartesianGrid vertical={false} horizontal strokeDasharray="3 3" />
                <XAxis dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    // interval={0}
                    style={{ fontSize: '12px' }}
                    tickFormatter={(name) => {
                        const parts = name.split(" "); // split full name into parts
                        return parts[parts.length - 1]; // return last part (last name)
                    }} />
                <YAxis width="auto" axisLine={false} tickLine={false} />
                <Bar dataKey="price_bdt" fill="#8884d8" shape={TriangleBar} label={{ position: 'top' }}>
                    {lawyers.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default Rechart;