function Accordion() {
    return(
        <div classnaName="accordion" id="accordionExample">
            <div className="accordion-item" style={{background: "#8EC1DE", border:"1px solid black"}}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: "#C4C4C4"}}>
                    ¿Quien Soy?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{background: "#8EC1DE", border:"1px solid black"}}>
                   Mi nombre es Albert Jhuset Quintanilla Peralta. Soy un fanatico de la tecnologia, me gusta restaurar y crear todo tipo de cosas.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{background: "#8EC1DE", border:"1px solid black"}}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{background: "#C4C4C4"}}>
                    ¿Como inicie en la programacion?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Fue todo gracias a un tutor que tuve el cual me presento este bello mundo del codigo
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{background: "#8EC1DE", border:"1px solid black"}}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{background: "#C4C4C4"}}>
                    ¿Habilidades?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Acato ordenes y soy bastante habilidoso a la hora de la resolución de problemas si tengo las herramientas adecuadas
                </div>
                </div>
            </div>
        </div>

    )
}
export default Accordion;