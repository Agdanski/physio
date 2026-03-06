import sitToStand from "@/assets/exercises/sit-to-stand.png";
import sidePlank from "@/assets/exercises/side-plank-from-knees.png";
import birdDog from "@/assets/exercises/bird-dog-new.png";
import bridge from "@/assets/exercises/bridge.png";
import abdominalBrace from "@/assets/exercises/abdominal-brace-with-breathing.png";
import isometricWristExt from "@/assets/exercises/isometric-wrist-extension.png";
import bandRow from "@/assets/exercises/band-row.png";
import hipExtensionBand from "@/assets/exercises/hip-extension-band.png";
import towelSqueeze from "@/assets/exercises/towel-squeeze.png";
import chinTuckLift from "@/assets/exercises/chin-tuck-with-head-lift.png";
import chinTuck from "@/assets/exercises/chin-tuck.png";
import bridgeWithBand from "@/assets/exercises/bridge-with-band.png";
import wallSlide from "@/assets/exercises/wall-slide.png";
import supination from "@/assets/exercises/supination.png";
import stepUp from "@/assets/exercises/step-up.png";
import eccentricWristExt from "@/assets/exercises/eccentric-wrist-extension.png";

const exerciseImages: Record<string, string> = {
  "sit-to-stand": sitToStand,
  "side-plank": sidePlank,
  "bird-dog": birdDog,
  "bridge": bridge,
  "bridge-band": bridgeWithBand,
  "abdominal-brace": abdominalBrace,
  "isometric-wrist-ext": isometricWristExt,
  "wrist-extension": isometricWristExt,
  "band-row": bandRow,
  "hip-extension-band": hipExtensionBand,
  "towel-squeeze": towelSqueeze,
  "chin-tuck-lift": chinTuckLift,
  "chin-tuck": chinTuck,
  "wall-slide": wallSlide,
  "wall-sit": wallSlide,
  "supination": supination,
  "step-up": stepUp,
  "step-down": stepUp,
  "eccentric-wrist-ext": eccentricWristExt,
};

export default exerciseImages;
