import TagButton from "./TagButton";
import imagesrc from "./onepiece.jpg"

export default function SideMenu() {
  return (
    <div style={{ border: "solid teal 5px" }}>
      <TagButton title = "button one" image= {imagesrc} />      
      <TagButton title = "button one" image= {imagesrc} />      
      <TagButton title = "button one" image= {imagesrc} />      
      </div>
  );
}