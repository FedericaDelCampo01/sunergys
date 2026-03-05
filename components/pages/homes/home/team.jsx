import teamData from '@/components/data/team-data';
import Link from 'next/link';

const Team = () => {
    return (
        <>
        <div className="team__one">
            <div className="container">
                <div className="row dark_image justify-content-center">
                    {teamData?.map((data, id) => (
                    <div className="col-lg-3 col-md-6 mb-35" key={id}>
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