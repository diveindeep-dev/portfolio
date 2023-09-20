import Nav from './nav';
import Cta from './cta';

export default function Home() {
  return (
    <main>
      <Nav />
      <section>
        <div className="section-content">
          <h1>PROJECT</h1>
        </div>
      </section>
      <section>
        <div className="section-content">1</div>
        <Cta>1 자세히 보기</Cta>
      </section>
      <section>
        <div className="section-content">2</div>
        <Cta>2 자세히 보기</Cta>
      </section>
      <section>
        <div className="section-content">3</div>
        <Cta>3 자세히 보기</Cta>
      </section>
    </main>
  );
}
