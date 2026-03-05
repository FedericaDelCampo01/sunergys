import Count from "../common/count";
import bg1 from "../../../public/assets/img/shape/shape-18.png";

const CounterSection = ({addClass}) => {
    return (
        <>
        <div className={`counter__two ${addClass}`} style={{backgroundImage: `url(${bg1.src})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="counter__two-grid">
                                <div className="counter__two-item">
                                    <i className="flaticon-project"></i>
                                    <h3><Count number={1} /><b>k</b></h3>
                                    <p>Proyectos Exitosos</p>
                                </div>
                                <div className="counter__two-item">
                                    <i className="flaticon-customer-review"></i>
                                    <h3><Count number={700} /><b>+</b></h3>
                                    <p>Reseñas de Clientes</p>
                                </div>
                                <div className="counter__two-item">
                                    <i className="flaticon-rating"></i>
                                    <h3><Count number={175} /><b>+</b></h3>
                                    <p>Miembros del Equipo</p>
                                </div>
                                <div className="counter__two-item">
                                    <i className="flaticon-trophy"></i>
                                    <h3><Count number={91} /><b>+</b></h3>
                                    <p>Premios Ganados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default CounterSection;