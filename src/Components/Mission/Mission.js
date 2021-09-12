import ColorStrip from "../../Assets/ColorStrip";
import "./Mission.css"
export default function Mission() {
  return (
    <section className = "mission__section" >
      <ColorStrip additionalClassName="misson-divider" />
      <div className = "mission__staement-wrapper">
      <p className = "mission__statement">
        Building a better world is a task that can only be achieved when we work
        together, even when we’re at a distance. We’re building a company to
        last — brewing beer and building brands that will continue to bring
        people together for the next 100 years and beyond. We are committed to
        working with our partners towards a more sustainable future.
      </p>
      </div>
    </section>
  );
}
