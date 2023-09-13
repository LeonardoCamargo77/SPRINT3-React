export default function Home() {
    return (
        <main>
            <h1>Tipos de guinchos</h1>
            <div className="fotos">
                <div className="guincho-item">
                    <img src="/guinchoasadeltapesado.jpg" alt="AsaDeltaPesado" />
                    <p>Guincho Asa Delta Pesado</p>
                </div>
                <div className="guincho-item">
                    <img src="/public/guinchocegonha.jpg" alt="Cegonha" />
                    <p>Guincho Cegonha</p>
                </div>
                <div className="guincho-item">
                    <img src="/guinchoreboque.jpg" alt="Reboque" />
                    <p>Guincho de Reboque</p>
                </div>
            </div>
        </main>
    )
}