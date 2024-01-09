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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/c8LR1_0yc64?si=KxybAuY1FrJlrGgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen controls></iframe>
                <p>เว้ยเส้าเทียนคือพ่อของเจ้า ซึ่งเป็นสหายรักของจางฟู้เหยินหัวหน้าพรรคกิเลนขาว ที่เก็บเจ้ามาเลี้ยงเมื่อ 22 ปีก่อน ซึ่งจริงๆแล้วก่อนที่จะเจอเจ้า เส้าฉิเฉียนแม่นางสิบสี่แห่งสำนักกิเลนขาว ซึ่งได้พบเจ้าข้างหนองน้ำ ใกล้เมืองเหลียงขุ่น ซึ่งเป็นที่ที่เซี๊ยะถงลี่ น้าสาวพี่แม่ ? ได้แนะนำให้ข้ารู้ ... ได้พบข้าหลี่เซี๊ยะซุย ก่อนที่จะเจอเจ้า ซึ่งอันที่จริงแล้ว ข้าเองก็ไม่เคยรู้มาก่อนว่าเจ้าเป็นลูกของ จางฟู้เหยิน จนข้านึกขึ้นได้ถึงวันที่จางม่านจื่อแม่เจ้า พาข้าไปเจอพี่สาวแม่ของเจ้า ซึ่งน้าสาว...</p>
            </div>
        </Layout>
    );
}

export default Owner;