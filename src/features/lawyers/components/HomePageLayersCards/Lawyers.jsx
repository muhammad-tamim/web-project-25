import React, { useEffect, useRef, useState } from 'react';
import LawyersCard from './LawyersCard';
import PrimaryButton from '../../../../shared/components/ui/Buttons/PrimaryButton';

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