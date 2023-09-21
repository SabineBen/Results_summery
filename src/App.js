import './App.css';

function App() {
  return (
    <div className='card'>
      <div className='card-container'>
        <section className='result'>
          <h3 className='title'>Your Result</h3>
          <div className='circle'>
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <b>Great</b>
          <p className='info'>You scored higher than 65% of the people who have taken thest tests.</p>
        </section>
        <section class="summary">
          <h3 class="title">Summary</h3>
          <div class="rows">
            <div class="row">
              <div class="badge">
                <b>Reaction</b>
              </div>
              <p><b>80</b> / 100</p>
            </div>
            <div class="row">
              <div class="badge">
                <b>Memory</b>
              </div>
              <p><b>92</b> / 100</p>
            </div>
            <div class="row">
              <div class="badge">
                <b>Verbal</b>
              </div>
              <p><b>61</b> / 100</p>
            </div>
            <div class="row">
              <div class="badge">
                <b>Visual</b>
              </div>
              <p><b>72</b> / 100</p>
            </div>
          </div>
          <button class="btn">Continue</button>
        </section>
      </div>
    </div>
    
  );
}

export default App;
