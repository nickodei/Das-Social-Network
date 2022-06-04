import './Overview.css';

const ColoredLine = ({ color, width }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: 5,
            width: width
        }}
    />
);

function Impressum() {

    return (
        <header className="App-header" id='impressum'>
            <div style={{ marginTop: 75 }}></div>
            <ColoredLine color="white" width={"90%"} />
            <div className='picture-animation'>
                <h2 style={{ marginTop: 75 }}>Impressum</h2>
                <div>Responsible for content $122 BGB:</div>
                <div>Vorname Nachname</div>
                <div>Adresse</div>
                <div>Mail</div>
                <div>Keine Ahnung</div>
                <div>Copyright@2022</div>
                <div style={{ marginTop: 75 }}></div>
            </div>
        </header>
    );
}

export default Impressum;