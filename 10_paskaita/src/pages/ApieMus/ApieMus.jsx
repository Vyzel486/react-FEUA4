import Link from "../../components/Links/RouterLink";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './ApieMus.css';
import coll from './images/Coll.jpg';

const ApieMus = () => {
  return (
    <div>
      <Link to="/Apie mus">
        <div className="aboutUs">
          <Header />
          <h1 className="aboutTitle">Apie Mus...</h1>
          <div>
            <img className="image" src={coll} alt="" />
            <p className="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ex, voluptatem libero alias autem culpa, doloribus quisquam laboriosam eum explicabo in. Dolore rem quos minima. Sapiente, et nostrum dicta provident, reiciendis, vel fugit inventore nam nesciunt sed cupiditate est quia molestias! Dolores iure, voluptatibus aut illo accusantium necessitatibus itaque placeat cum deleniti sit enim? Vero magnam minus id facere molestias soluta dicta incidunt eligendi veritatis, odio animi, nulla fuga quaerat eveniet facilis ea quo a temporibus? Nostrum nisi quam unde adipisci ipsum ipsa aperiam voluptatibus perspiciatis quasi ducimus repellendus fugit, doloremque ratione, accusamus recusandae ad quidem expedita dignissimos minus! Itaque placeat cumque assumenda voluptates odit facere quam facilis ratione? Quidem accusamus, quod fuga, illum adipisci aliquid cupiditate suscipit quibusdam, dolores sit laudantium ex voluptate saepe natus. Aliquid rerum necessitatibus, quidem itaque dicta consectetur impedit, ex laudantium suscipit harum vel earum excepturi aut quam mollitia, eaque quaerat asperiores sapiente voluptatum blanditiis. Quasi sequi alias voluptatibus odio vero provident dolores quidem earum! Corporis aliquam, quis distinctio cumque reprehenderit odit voluptas suscipit temporibus at possimus iusto. Eligendi harum sed maxime, suscipit sit aliquam similique qui repudiandae doloremque deserunt nam amet error quas ipsam odit repellat non accusantium iure quam eius voluptate doloribus aliquid at. Reprehenderit voluptas qui et similique aspernatur animi, esse labore eius nihil reiciendis minus placeat natus repellat expedita. Molestias voluptas vel totam expedita. Voluptatum unde, perspiciatis sed, voluptas dolor perferendis quod alias autem aliquam natus vitae nesciunt? Delectus veritatis culpa, sapiente quos laboriosam modi beatae officiis optio consequatur iure veniam adipisci tempora libero. Ut veritatis, sint commodi eaque libero necessitatibus provident nam quaerat neque qui inventore consequuntur, ratione temporibus harum nostrum id sed quidem obcaecati vitae soluta non maxime? Accusamus praesentium quidem veniam nemo nam et distinctio, cum vero ex consectetur a, doloribus quia aliquam modi ipsam sint? Assumenda, architecto!</p>
          </div>
          <Footer />
        </div>
      </Link>
    </div>
  );
};

export default ApieMus;
