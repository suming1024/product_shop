import mainImg from '../assets/hero.png'

const Main = () => {

    return(
        <main className="main">
            <h1>컴퓨터 주변 기기 판매</h1>
            <section>
                <p>최신 컴퓨터 만나봥</p>
                <div>
                    <img src="{mainImg}" alt="컴퓨터" />
                </div>
            </section>
        </main>
    )
}

export default Main