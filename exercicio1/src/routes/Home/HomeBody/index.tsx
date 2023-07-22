import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function HomeBody() {

    return (
        <main>
            <section>
                <div className="container margin-tb30">
                    <Card title="Pagina inicial" />
                    <Button text="Ver promoção" />
                </div>
            </section>
        </main>
    );
}