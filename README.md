## Project Name: 

## Project Description:  

## Live Site Link:

## What I learned new while building this project:

1. How to avoid repeating tailwind classes for NavLinks isActive: 
 
form this: 

```jsx
<div>
    {navItems.map((item) => <NavLink key={item.id} to={item.to} 
    className={({ isActive }) => isActive ? "text-primary-content/70 font-medium text-lg border-b-2 border-primary ""text-primary-content/70 font-medium text-lg"}>{item.label}</NavLink>)}
</div>
```
to this: 

```jsx
<div>
{navItems.map((item) => <NavLink key={item.id} to={item.to}
    className={({ isActive }) => {
        const baseClasses = "text-primary-content/70 font-medium text-lg";
        const activeClasses = "border-b-2 border-primary";
        return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
    }}>{item.label}</NavLink>)}
</div>
```

2. How to add counting animation:

```jsx
npm i react-countup
npm i react-intersection-observer
```

```jsx
import React from 'react';
import lawyers from '../../../assets/images/success-doctor.png'
import review from '../../../assets/images/success-review.png'
import initiated from '../../../assets/images/success-patients.png'
import staffs from '../../../assets/images/success-staffs.png'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SuccessNumbers = () => {
    const { ref, inView } = useInView({ threshold: .5, triggerOnce: true }); // percentage of element visible before triggering (0 - 1)

    const successItems = [
        { id: 1, image: `${lawyers}`, number: 199, label: "Total Lawyers" },
        { id: 2, image: `${review}`, number: 467, label: "Total Reviews" },
        { id: 3, image: `${initiated}`, number: 1900, label: "Total Initiated" },
        { id: 4, image: `${staffs}`, number: 300, label: "Total Stuffs" },
    ]


    return (
        <div ref={ref} className='py-[100px]'>
            <div className='text-center pb-8'>
                <h1 className='font-extrabold text-[40px]'>We Provide Best Law Services</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 justify-between'>
                {successItems.map((item) => <div key={item.id} className='flex flex-col items-center md:items-start md:pl-12 md:pr-[110px] py-10 gap-4 bg-primary-content/5 rounded-2xl'>
                    <img src={item.image} className='size-16' alt="" />
                    <h3 className='font-extrabold text-5xl'>{inView ? <CountUp end={item.number} duration={5} /> : 0}+</h3>
                    <p className='text-primary-content/60 font-medium text-xl'>{item.label}</p>
                </div>)}
            </div>
        </div>
    );
};

export default SuccessNumbers;
```

3. Different ways to get specific date name:

```js
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const dayName = days[date.getDay()]; // Tuesday

const date = new Date();
const longWeekday = date.toLocaleString('en-US', { weekday: 'long' }); // Tuesday
const shortWeekday = date.toLocaleString('en-US', { weekday: 'short' }); // Tue
```

4. Different ways to scroll up when click show less: 

- Using useRef:
  
```jsx
import React, { useEffect, useRef, useState } from 'react';
import LawyersCard from './LawyersCard';
import PrimaryButton from '../../../shared/components/ui/Buttons/PrimaryButton';

const Lawyers = ({ lawyers }) => {
    const [lawyersData, setLawyersData] = useState([])
    const [clickedShowButton, setClickedShowButton] = useState(false)
    const sectionRef = useRef(null);

    useEffect(() => {
        if (clickedShowButton) {
            setLawyersData(lawyers)

        }
        else {
            const showLessData = lawyers.slice(0, 6)
            setLawyersData(showLessData)
        }
    }, [clickedShowButton, lawyers])

    const handleLShowAllAndShowLess = () => {
        if (clickedShowButton) {
            // When showing less, scroll to section top
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setClickedShowButton(!clickedShowButton)
    }
    return (
        <div ref={sectionRef}>
            <div className='text-center pb-8 space-y-4 md:space-y-8'>
                <h1 className='font-extrabold text-3xl md:text-[40px]'>Our Best Lawyers</h1>
                <p className='max-w-[1009px] mx-auto text-sm md:text-base text-primary-content/80'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 justify-between gap-10'>
                {lawyersData.map((lawyer) => <LawyersCard key={lawyer.id} lawyer={lawyer}></LawyersCard>)}
            </div>
            <div className='flex justify-center pt-8'>
                <PrimaryButton onClick={handleLShowAllAndShowLess} label={clickedShowButton ? "Show Less Lawyer" : "Show All Lawyer"}></PrimaryButton>
            </div>
        </div >
    );
};

export default Lawyers;
```

- Using scrollTo: Goes to a specific scroll position from the very top of the page

```jsx
const handleLShowAllAndShowLess = () => {
    if (clickedShowButton) {
        window.scrollTo({ top: 920, behavior: 'smooth' });
    }
    setClickedShowButton(!clickedShowButton)
}
```


## Challenges I faced while building this project:
1. While Designing the lawyers card

```jsx
import React from 'react';
import { AiOutlineTrademark } from 'react-icons/ai';
import { Link } from 'react-router';


const LawyersCard = ({ lawyer }) => {
    const { id, name, specialization, experience, license_number, image, availability } = lawyer || {}

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const dayName = days[date.getDay()];

    const todayAvailabilityCheck = availability.find((available) => available === dayName)

    return (
        <div className='border border-primary-content/15 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left'>
            <div className='flex-shrink-0 w-full md:w-[159px]'>
                <img src={image} className='rounded-[12px] w-full h-[158px]' alt="" />
            </div>
            <div className='flex-1 space-y-2'>
                <div className='flex gap-2'>
                    <p className={`${todayAvailabilityCheck ? "text-success bg-success/10 rounded-full px-[14px] py-[5px] font-medium text-xs" : "text-error bg-error/10 rounded-full px-[14px] py-[5px] font-medium text-xs"}`}>{todayAvailabilityCheck ? "Available" : "Not Available"}</p>
                    <p className='text-info bg-info/10 rounded-full px-[14px] py-[5px] font-medium text-xs'>{experience}+ Years Experience</p>
                </div>
                <div className=''>
                    <h2 className='font-extrabold text-2xl'>{name}</h2>
                    <p className='font-medium text-lg text-primary-content/60'>{specialization} Expert</p>
                    <p className='font-medium text-base text-primary-content/60 flex items-center gap-2'><AiOutlineTrademark size={16} />
                        License No: {license_number}</p>
                </div>
                <div>
                    <Link to={`/ lawyers - details /:${id}`}>
                        <button className='cursor-pointer rounded-full border border-info/20 w-full py-2 text-info font-bold text-base hover:text-neutral-content hover:bg-info'>View Details</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default LawyersCard;
```

here, 

- flex-shrink-0 prevents the image from shrinking when space is tight.
- w-[180px] fixes the image column size.
- flex-1 lets the text area take up the rest.

2. To designing the re-chart: 

![images](/src/assets/reademe-images/re-chart.png)

```jsx
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
```

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
