// import Alerts from "./components/Alerts";
// import Button from "./components/Button";
// import PALETTE from "./shared/theme/constants";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div>
      <div
        style={{
          margin: "2rem",
        }}
      >
        <Accordion
          title={[
            "Accordion Item #1",
            "Accordion Item #2",
            "Accordion Item #3",
          ]}
          description={[
            "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
            "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
            "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
          ]}
          color="primary"
        />
      </div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "1em",
        }}
      >
        <div>
          <Button color={PALETTE.primary}>Primary</Button>
          <Button color={PALETTE.secondary}>Secondary</Button>
          <Button color={PALETTE.success}>Success</Button>
          <Button color={PALETTE.danger}>Danger</Button>
          <Button color={PALETTE.warning}>Warning</Button>
          <Button color={PALETTE.info}>Info</Button>
          <Button color={PALETTE.light}>Light</Button>
          <Button color={PALETTE.dark}>Dark</Button>
        </div>
        <div>
          <Button color={PALETTE.primary} outline>
            Primary
          </Button>
          <Button color={PALETTE.secondary} outline>
            Secondary
          </Button>
          <Button color={PALETTE.success} outline>
            Success
          </Button>
          <Button color={PALETTE.danger} outline>
            Danger
          </Button>
          <Button color={PALETTE.warning} outline>
            Warning
          </Button>
          <Button color={PALETTE.info} outline>
            Info
          </Button>
          <Button color={PALETTE.light} outline>
            Light
          </Button>
          <Button color={PALETTE.dark} outline>
            Dark
          </Button>
        </div>
      </div>
      <div
        style={{
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "1em",
        }}
      >
        <Alerts color="primary" title="A simple primary alert—check it out!" />
        <Alerts
          color="secondary"
          title="A simple secondary alert—check it out!"
        />
        <Alerts color="success" title="A simple success alert—check it out!" />
        <Alerts color="danger" title="A simple danger alert—check it out!" />
        <Alerts color="warning" title="A simple warning alert—check it out!" />
        <Alerts color="info" title="A simple info alert—check it out!" />
        <Alerts color="light" title="A simple light alert—check it out!" />
        <Alerts color="dark" title="A simple dark alert—check it out!" />
      </div> */}
    </div>
  );
}

export default App;
