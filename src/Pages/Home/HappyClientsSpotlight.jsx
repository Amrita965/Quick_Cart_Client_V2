import manImg from '../../assets/images/man.jpg';
import HappyClientSpotlight from './HappyClientSpotlight';

const HappyClientsSpotlight = () => {

    const clients = [
        {
           id: 1,
           name: "John Doe",
           title: "CEO & Founder",
           photo: manImg
        },
        {
           id: 2,
           name: "John Doe",
           title: "CEO & Founder",
           photo: manImg
        },
        {
           id: 3,
           name: "John Doe",
           title: "CEO & Founder",
           photo: manImg
        },
        {
           id: 4,
           name: "John Doe",
           title: "CEO & Founder",
           photo: manImg
        },
    ]

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {
               clients.map(client => <HappyClientSpotlight key={client.id} client={client} />)
            }
        </section>
    );
};

export default HappyClientsSpotlight;