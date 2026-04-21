import teamData from '@/components/data/team-data';
import Link from 'next/link';

const Team = () => {
    return (
        <>
        <div className="team__one">
            <div className="container">
                <div
                    className="dark_image"
                    style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        gap: '24px',
                        overflowX: 'auto',
                        paddingBottom: '10px'
                    }}
                >
                    {teamData?.map((data, id) => (
                    <div
                        key={id}
                        style={{
                            flex: '0 0 260px'
                        }}
                    >
                        <div className="team__one-item">
                            <div className="team__one-item-image">
                                <img src={data.image.src} alt="image" />
                                <div className="team__one-item-image-content">
                                    <h6><Link href={`/team/${data.id}`}>{data.name}</Link></h6>
                                    <span>{data.position}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Team;