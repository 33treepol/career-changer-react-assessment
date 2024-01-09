import Layout from "./layout";
import img from './img/33treepol.png'
import './style/owner.css'

function Owner() {
    return (
        <Layout>
            <div className="Owner-container">
                <h1>Goh - JSD#6 - 33</h1>
                <div className="profile-image">
                    <img src={img} alt="test" id="my-profile"/>
                </div>
                <h3>Short Biography:</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore dolorem perspiciatis, quas nisi placeat ullam ea blanditiis obcaecati autem. Amet placeat expedita accusamus blanditiis, vel ratione earum enim consequuntur? Qui illo dignissimos id cumque debitis quas voluptate numquam esse, vero, quaerat autem velit laudantium facere. Sint tempore soluta voluptatum commodi!</p>
            </div>
        </Layout>
    );
}

export default Owner;