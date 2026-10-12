const exerciseDetails = [
  {
    id: "barbell-squat", title: "Barbell back squat", group: "Legs & glutes", level: "Beginner · intermediate · advanced",
    primary: ["Quadriceps", "Gluteus maximus"], secondary: ["Adductors", "Hamstrings", "Spinal erectors", "Core"],
    video: "https://balans-gamma.vercel.app/videos/exercises/Barbell_squat.mp4",
    technique: ["Rest the bar on your upper traps and set your feet slightly wider than shoulder width.", "Brace your core and bend at the hips and knees together.", "Track your knees over your toes and keep your spine neutral.", "Descend to a comfortable depth and drive up through your whole foot."],
    mistakes: ["Knees cave inward.", "Heels lift off the floor.", "Core tension is lost and the lower back rounds.", "Load increases before technique is solid."],
    tips: ["Perform 2–4 warm-up sets before working sets.", "Wear stable shoes with a firm sole.", "If ankle mobility is limited, a small heel wedge is acceptable."],
    variants: ["Front squat", "Pause squat", "Smith machine squat", "Goblet squat"]
  },
  {
    id: "leg-press", title: "Leg press", group: "Legs & glutes", level: "Beginner · intermediate · advanced",
    primary: ["Quadriceps"], secondary: ["Gluteus maximus", "Hamstrings", "Adductors", "Calves"],
    video: "https://balans-gamma.vercel.app/videos/exercises/leg_press.mp4",
    technique: ["Keep your hips and back firmly against the pad; place your feet about shoulder width apart.", "Release the safeties and lower the platform under control.", "Choose a depth where your pelvis does not tuck and your lower back stays on the pad.", "Press through your full foot without slamming your knees into full extension."],
    mistakes: ["Pelvis lifts off the back pad.", "Knees collapse inward.", "Excessive depth causes pelvic tuck.", "The platform drops without control."],
    tips: ["Foot placement shifts emphasis but should still feel mechanically comfortable.", "Match range of motion to hip and knee mobility."],
    variants: ["High foot placement", "Low foot placement", "Wide stance", "Single-leg press"]
  },
  {
    id: "bulgarian-split-squat", title: "Bulgarian split squat", group: "Legs & glutes", level: "Intermediate · advanced",
    primary: ["Quadriceps", "Gluteus maximus"], secondary: ["Hamstrings", "Adductors", "Core", "Calves"],
    video: "https://balans-gamma.vercel.app/videos/exercises/bulgarian_split_squat.mp4",
    technique: ["Stand in front of a bench and place your rear foot on the support.", "Find a stride length that lets you bend the front leg with stability.", "Lower by flexing the front hip and knee.", "Drive up while keeping most of the effort on the front leg."],
    mistakes: ["Stance is too short or too long.", "Front knee caves inward.", "Push comes mainly from the rear leg.", "Load increases before balance is stable."],
    tips: ["Master the pattern with body weight first.", "Dumbbells are a natural next progression."],
    variants: ["Body weight", "With dumbbells", "Front foot elevated", "Smith machine"]
  },
  {
    id: "hip-thrust", title: "Barbell hip thrust", group: "Legs & glutes", level: "Beginner · intermediate · advanced",
    primary: ["Gluteus maximus"], secondary: ["Hamstrings", "Adductors", "Core"],
    video: "https://balans-gamma.vercel.app/videos/exercises/hip_thrust.mp4",
    technique: ["Set your upper back on a stable bench; pad the bar across your hip crease.", "Place your feet so shins are nearly vertical at the top.", "Drive your hips up to a neutral trunk position with ribs down.", "Squeeze your glutes at the top and lower under control."],
    mistakes: ["Hyperextending the lower back instead of extending the hip.", "Feet too far forward or too close.", "Pushing through the toes and losing stability.", "Tempo is too fast."],
    tips: ["Choose bench height where your shoulder girdle stays stable.", "Start with moderate load and full controlled range."],
    variants: ["Body weight", "With dumbbell", "Single leg", "Machine"]
  },
  {
    id: "leg-extension", title: "Leg extension", group: "Legs & glutes", level: "Beginner · intermediate · advanced",
    primary: ["Quadriceps"], secondary: [],
    video: "https://balans-gamma.vercel.app/videos/exercises/leg_extension.mp4",
    technique: ["Align the knee joint axis with the machine axis.", "Fix your hips and back; position the pad above the ankle.", "Extend the knees through a comfortable range without jerking.", "Lower the weight more slowly than you lift it."],
    mistakes: ["Machine axis does not line up with the knee.", "Hips lift off the seat.", "Weight is thrown up with momentum.", "Load is so heavy that range of motion shrinks."],
    tips: ["Use this as a complement to multi-joint leg work.", "If it hurts, reduce load and range or choose an alternative."],
    variants: ["Both legs", "Single leg", "Pause at the top"]
  },
  {
    id: "hamstring-curl", title: "Leg curl", group: "Legs & glutes", level: "Beginner · intermediate · advanced",
    primary: ["Hamstrings"], secondary: ["Calves"],
    video: "https://balans-gamma.vercel.app/videos/exercises/hamstring_curl.mp4",
    technique: ["Adjust the machine for shin length and align the rotation axis with your knee.", "Keep your hips fixed and maintain a neutral lower back.", "Flex the knees until you feel a comfortable hamstring squeeze.", "Return the weight smoothly while keeping tension."],
    mistakes: ["Hips rise off the pad.", "Movement is jerky.", "Weight drops without control.", "Range shortens because load is too heavy."],
    tips: ["Do not chase touching the pad to your glutes at all costs.", "Keep a consistent rep tempo."],
    variants: ["Lying", "Seated", "Standing single leg"]
  },
  {
    id: "seated-cable-row", title: "Seated cable row", group: "Back", level: "Beginner · intermediate · advanced",
    primary: ["Latissimus dorsi", "Rhomboids", "Middle trapezius"], secondary: ["Rear deltoid", "Biceps", "Forearms"],
    video: "https://balans-gamma.vercel.app/videos/exercises/seated_cable_row.mp4",
    technique: ["Sit stable with a neutral spine.", "Pull the handle to your lower ribs or upper abdomen.", "At the finish, squeeze the shoulder blades without shrugging.", "Extend the arms smoothly while controlling the stretch."],
    mistakes: ["Swinging the torso.", "Rounding the lower back.", "Shoulders hike toward the ears.", "Pulling mainly with the arms."],
    tips: ["Initiate the pull with the back muscles.", "Control the return phase and scapular movement."],
    variants: ["Close grip", "Wide grip", "Single arm", "Chest-supported"]
  },
  {
    id: "one-arm-dumbbell-row", title: "One-arm dumbbell row", group: "Back", level: "Beginner · intermediate · advanced",
    primary: ["Latissimus dorsi"], secondary: ["Rhomboids", "Trapezius", "Rear deltoid", "Biceps"],
    video: "https://balans-gamma.vercel.app/videos/exercises/one_arm_dumbell_row.mp4",
    technique: ["Create a stable base with your free hand and foot.", "Keep your back neutral and trunk still.", "Pull your elbow back toward the hip without lifting the shoulder.", "Lower the dumbbell to a controlled lat stretch."],
    mistakes: ["Rotating the torso toward the dumbbell.", "Yanking with the shoulder and arm.", "Flexing the lower back.", "Shortened range of motion."],
    tips: ["Choose a weight that allows the same path on every rep.", "Compare sides and start with the weaker side."],
    variants: ["Knee on bench", "Hand-supported", "Chest-supported"]
  },
  {
    id: "lat-pulldown", title: "Lat pulldown", group: "Back", level: "Beginner · intermediate · advanced",
    primary: ["Latissimus dorsi"], secondary: ["Biceps", "Rhomboids", "Middle and lower trapezius"],
    video: "https://balans-gamma.vercel.app/videos/exercises/lat_pulldown.mp4",
    technique: ["Secure your thighs under the pads and lean back slightly.", "Depress the shoulders and pull the bar to the upper chest.", "Drive elbows down while keeping wrists neutral.", "Return the bar to a controlled stretch."],
    mistakes: ["Pulling behind the neck.", "Excessive body swing.", "Shoulders shrug up.", "Grip too wide with short range."],
    tips: ["Pick a grip width that feels good on your shoulders.", "Think of moving your elbows toward your sides."],
    variants: ["Neutral grip", "Close grip", "Single arm", "Underhand grip"]
  },
  {
    id: "t-bar-row", title: "T-bar row", group: "Back", level: "Intermediate · advanced",
    primary: ["Latissimus dorsi", "Rhomboids", "Middle trapezius"], secondary: ["Rear deltoid", "Biceps", "Spinal erectors"],
    video: "https://balans-gamma.vercel.app/videos/exercises/t_bar_rows.mp4",
    technique: ["Set a stable hinged position with a neutral spine.", "Brace the trunk and row the handle to the lower chest or abdomen.", "Retract the shoulder blades without shrugging.", "Lower to a full controlled stretch."],
    mistakes: ["Rounding the lower back.", "Jerking with the torso.", "Torso too upright.", "Range cuts short because weight is too heavy."],
    tips: ["A chest-supported version reduces lower-back demand.", "Do not turn the row into a hip extension."],
    variants: ["Chest-supported", "Close neutral grip", "Wide grip"]
  },
  {
    id: "barbell-bent-over-row", title: "Barbell bent-over row", group: "Back", level: "Intermediate · advanced",
    primary: ["Latissimus dorsi", "Rhomboids", "Middle trapezius"], secondary: ["Rear deltoid", "Biceps", "Spinal erectors"],
    video: "https://balans-gamma.vercel.app/videos/exercises/barbell_bent_over_row.mp4",
    technique: ["Hinge the hips back and incline the torso with a neutral spine.", "Hold the bar under the shoulders and brace your core.", "Row the bar to the abdomen, driving elbows back.", "Lower fully without losing trunk position."],
    mistakes: ["Rounded back.", "Extending the torso on every rep.", "Snatching the bar.", "Shoulders shrug toward the ears."],
    tips: ["If the lower back limits back work, use a chest-supported row.", "Torso angle and bar path shape load distribution."],
    variants: ["Underhand grip", "Pendlay row", "Row to chest"]
  },
  {
    id: "back-hyperextension", title: "Back extension", group: "Back", level: "Beginner · intermediate · advanced",
    primary: ["Spinal erectors", "Gluteus maximus"], secondary: ["Hamstrings"],
    video: "https://balans-gamma.vercel.app/videos/exercises/hyperextension.mp4",
    technique: ["Set the pad below the hip joints and secure your feet.", "Lower by hinging at the hips.", "Rise using glutes and erectors until the body forms a straight line.", "Stop without hyperextending the lower back."],
    mistakes: ["Excessive arch at the top.", "Rounded back without control.", "Jerking the torso.", "Pad too high blocks hip motion."],
    tips: ["Start with body weight.", "For glute emphasis, slight upper-back rounding is OK if the lower back stays stable."],
    variants: ["Body weight", "Plate at chest", "45-degree bench"]
  },
  {
    id: "pull-up", title: "Pull-up", group: "Back", level: "Intermediate · advanced",
    primary: ["Latissimus dorsi", "Biceps"], secondary: ["Rhomboids", "Trapezius", "Forearms", "Core"],
    video: "https://balans-gamma.vercel.app/videos/exercises/pull_up.mp4",
    technique: ["Start from a controlled hang with a secure grip.", "Depress the shoulders and pull your chest toward the bar.", "Keep the body braced and avoid swinging.", "Lower to a comfortable arm extension."],
    mistakes: ["Kipping and leg swing.", "Shoulders shrug to the ears.", "Short range of motion.", "Yanking from the bottom."],
    tips: ["Use a band or assisted machine to learn full range.", "Add load only after reps are consistent."],
    variants: ["Neutral grip", "Underhand grip", "With band", "Weighted"]
  },
  {
    id: "push-up", title: "Push-up", group: "Chest", level: "Beginner · intermediate · advanced",
    primary: ["Pectoralis major", "Triceps"], secondary: ["Front deltoid", "Serratus anterior", "Core"],
    video: "https://balans-gamma.vercel.app/videos/exercises/push_up.mp4",
    technique: ["Place hands slightly wider than shoulders.", "Maintain a straight line from head to heels.", "Lower the chest toward the floor while bracing core and glutes.", "Press up without losing body position."],
    mistakes: ["Hips sag.", "Excessive lower-back arch.", "Elbows flared straight out to the sides.", "Incomplete range of motion."],
    tips: ["Rep quality matters more than count.", "To make it easier, use a high incline rather than breaking form."],
    variants: ["Incline push-up", "From knees", "Feet elevated", "Weighted"]
  },
  {
    id: "dumbbell-bench-press", title: "Dumbbell bench press", group: "Chest", level: "Beginner · intermediate · advanced",
    primary: ["Pectoralis major", "Triceps"], secondary: ["Front deltoid"],
    video: "https://balans-gamma.vercel.app/videos/exercises/dumbell_bench_press.mp4",
    technique: ["Drive feet into the floor and set the shoulder blades on the bench.", "Start with dumbbells over the shoulders and neutral wrists.", "Lower along a comfortable arc to chest level.", "Press up while keeping shoulder and trunk position."],
    mistakes: ["Shoulders roll forward.", "Elbows flared excessively wide.", "Dumbbells clank together at the top.", "Loss of control at the bottom."],
    tips: ["Neutral or semi-neutral grip may feel better on the shoulders.", "For heavy sets, a spotter helps for safe dumbbell pick-up."],
    variants: ["Incline bench", "Neutral grip", "Single arm", "Floor press"]
  },
  {
    id: "dumbbell-fly", title: "Dumbbell chest fly", group: "Chest", level: "Beginner · intermediate · advanced",
    primary: ["Pectoralis major"], secondary: ["Front deltoid", "Biceps — stabilization"],
    video: "https://balans-gamma.vercel.app/videos/exercises/dumbell_fly.mp4",
    technique: ["Set the shoulder blades and keep a slight constant elbow bend.", "Open the arms in an arc to a comfortable chest stretch.", "Bring the arms together on the same path without turning it into a press.", "Keep a slow, controlled tempo."],
    mistakes: ["Lowering too deep.", "Elbow angle changes mid-rep.", "Heavy weight and jerking.", "Shoulders lift off the bench."],
    tips: ["This is an isolation move — moderate load is often most effective.", "If uncomfortable, try cable flyes or pec deck."],
    variants: ["Incline bench", "Floor fly", "Cable crossover"]
  },
  {
    id: "barbell-bench-press", title: "Barbell bench press", group: "Chest", level: "Beginner · intermediate · advanced",
    primary: ["Pectoralis major", "Triceps"], secondary: ["Front deltoid"],
    video: "https://balans-gamma.vercel.app/videos/exercises/barbell_bench_press.mp4",
    technique: ["Plant the feet firmly; retract and depress the shoulder blades.", "Grip so forearms are near vertical at the bottom.", "Lower the bar to the lower chest under control.", "Press up and slightly back while keeping contact between hips and bench."],
    mistakes: ["Wrists bent sharply backward.", "Elbows flared straight out.", "Bar drops onto the chest.", "Hips lift off the bench."],
    tips: ["Use safety pins or a spotter.", "A repeatable bar path beats the widest grip."],
    variants: ["Close grip", "Incline bench", "Pause bench", "Smith machine press"]
  },
  {
    id: "barbell-bench-press-wide-grip", title: "Wide-grip barbell bench press", group: "Chest", level: "Intermediate · advanced",
    primary: ["Pectoralis major"], secondary: ["Triceps", "Front deltoid"],
    video: "https://balans-gamma.vercel.app/videos/exercises/barbell_bench_press_wide_grip.mp4",
    technique: ["Set stable foot and shoulder-blade position.", "Choose a wide but shoulder-friendly grip.", "Lower to the chest with vertical wrists and controlled elbows.", "Press without shifting the shoulder girdle."],
    mistakes: ["Grip wider than shoulder mobility allows.", "Shoulders drift forward.", "Bouncing off the chest.", "Inconsistent touch point."],
    tips: ["Wide grip shortens range but can increase shoulder stress.", "If uncomfortable, return to a moderate grip."],
    variants: ["Moderate grip", "Pause bench", "Incline bench"]
  },
  {
    id: "machine-pec-fly", title: "Pec deck / machine fly", group: "Chest", level: "Beginner · intermediate · advanced",
    primary: ["Pectoralis major"], secondary: ["Front deltoid"],
    video: "https://balans-gamma.vercel.app/videos/exercises/chest_pec_fly_machine.mp4",
    technique: ["Adjust the seat so handles are about chest height.", "Keep your back on the pad and shoulder blades stable.", "Sweep the arms in an arc until you feel chest contraction.", "Return to a comfortable stretch without jerking."],
    mistakes: ["Shoulders roll forward.", "Start position too deep.", "Handles slam together.", "Using momentum instead of control."],
    tips: ["Moderate load helps you keep the path clean.", "Do not maximally stretch the shoulder joint."],
    variants: ["Forearms on pads", "Straight handles", "Cable crossover"]
  },
  {
    id: "seated-dumbbell-shoulder-press", title: "Seated dumbbell shoulder press", group: "Shoulders", level: "Beginner · intermediate · advanced",
    primary: ["Front deltoid", "Lateral deltoid"], secondary: ["Triceps", "Upper trapezius", "Core"],
    video: "https://balans-gamma.vercel.app/videos/exercises/seated_dumbell_shoulder_press.mp4",
    technique: ["Sit with back support and feet planted.", "Hold dumbbells at shoulder height and brace your core.", "Press upward along a comfortable path.", "Lower under control without arching the lower back."],
    mistakes: ["Excessive lower-back arch.", "Using torso momentum.", "Dumbbells drop quickly.", "Elbows drift far behind the body."],
    tips: ["Shoulder comfort matters more than chasing weight.", "Neutral grip is often easier on the joints."],
    variants: ["Standing", "Arnold press", "Neutral grip", "Single arm"]
  },
  {
    id: "reverse-pec-deck", title: "Reverse pec deck", group: "Shoulders", level: "Beginner · intermediate · advanced",
    primary: ["Rear deltoid"], secondary: ["Rhomboids", "Middle trapezius"],
    video: "https://balans-gamma.vercel.app/videos/exercises/reverse_pec_deck.mp4",
    technique: ["Adjust the seat and press your chest to the pad.", "Keep shoulders down and a slight bend in the elbows.", "Open the arms using the rear delts.", "Return the handles smoothly without losing trunk position."],
    mistakes: ["Over-squeezing the shoulder blades.", "Shoulders shrug toward the ears.", "Jerking with the torso.", "Heavy load shortens range."],
    tips: ["For rear-delt focus, do not turn it into a scapular row.", "Use a calm, steady tempo."],
    variants: ["Single arm", "Cable crossover", "Bent-over dumbbells"]
  },
  {
    id: "face-pull", title: "Face pull", group: "Shoulders", level: "Beginner · intermediate · advanced",
    primary: ["Rear deltoid", "Rhomboids"], secondary: ["Middle and lower trapezius", "External rotators", "Biceps"],
    video: "https://balans-gamma.vercel.app/videos/exercises/rear_delt_face_pull.mp4",
    technique: ["Set the rope around face height and step back until the cable is taut.", "Pull rope ends toward the temples, elbows wide.", "Finish with external rotation at the shoulder without arching the lower back.", "Return smoothly to the start."],
    mistakes: ["Load is too heavy.", "Shoulders lift upward.", "Pulling to the chest instead of the face.", "Swinging the torso."],
    tips: ["Choose weight that lets you control external rotation.", "Do not rely on this as your only shoulder exercise."],
    variants: ["Standing", "Seated", "Single arm"]
  },
  {
    id: "shoulder-press-mistakes", title: "Shoulder press: common mistakes", group: "Shoulders", level: "Beginner · intermediate",
    primary: ["Front and lateral deltoids", "Triceps"], secondary: ["Upper trapezius", "Core"],
    video: "https://balans-gamma.vercel.app/videos/exercises/shoulder_press_mistakes.mp4",
    technique: ["Stabilize the trunk and keep ribs down.", "Press along a path that feels good in the shoulder joints.", "Maintain neutral wrists and vertical forearms.", "Lower under control and stop before pain."],
    mistakes: ["Large lower-back arch.", "Head juts forward.", "Elbows flared excessively.", "Momentum and incomplete range."],
    tips: ["Match grip width and bench angle to comfort.", "Rehearse technique with light load before progressing."],
    variants: ["Seated dumbbells", "Neutral grip", "Machine press"]
  },
  {
    id: "dumbbell-lateral-raise", title: "Dumbbell lateral raise", group: "Shoulders", level: "Beginner · intermediate · advanced",
    primary: ["Lateral deltoid"], secondary: ["Front deltoid", "Upper trapezius"],
    video: "https://balans-gamma.vercel.app/videos/exercises/dumbell_lateral_raise.mp4",
    technique: ["Stand stable with a slight bend in the elbows.", "Raise the arms out to the sides slightly in front of the body.", "Stop around shoulder height or earlier if needed.", "Lower slowly while keeping tension."],
    mistakes: ["Swinging the torso.", "Shoulders shrug toward the ears.", "Dumbbells too heavy.", "Hands much higher than elbows."],
    tips: ["The lateral delt usually responds to moderate load and stable form.", "Cables keep tension in the lower part of the range."],
    variants: ["Cable lateral raise", "Supported", "Single arm", "Machine"]
  },
  {
    id: "dumbbell-common-mistakes", title: "Dumbbell exercises: common mistakes", group: "Arms", level: "Beginner · intermediate",
    primary: ["Depends on the exercise"], secondary: ["Shoulders", "Arms", "Chest", "Back"],
    video: "https://balans-gamma.vercel.app/videos/exercises/dumbbells_common_mistakes.mp4",
    technique: ["Pick a weight where every rep stays controlled.", "Brace the trunk; do not replace target-muscle work with momentum.", "Use a range of motion suited to the movement.", "Control both the lift and the lowering phase."],
    mistakes: ["Load too heavy.", "Swinging and jerking.", "Incomplete range of motion.", "Unstable shoulders and wrists."],
    tips: ["Build symmetry and repeatability first.", "Adjust bench angle and grip for each exercise."],
    variants: ["Presses", "Rows", "Curls", "Flyes"]
  },
  {
    id: "seated-dumbbell-bicep-curl", title: "Seated dumbbell biceps curl", group: "Arms", level: "Beginner · intermediate · advanced",
    primary: ["Biceps"], secondary: ["Brachialis", "Brachioradialis", "Forearm flexors"],
    video: "https://balans-gamma.vercel.app/videos/exercises/seated_dumbell_bicep_curl.mp4",
    technique: ["Sit stable with arms at your sides.", "Keep elbows close to the torso.", "Curl without driving the shoulders forward.", "Squeeze at the top and lower slowly."],
    mistakes: ["Swinging the torso.", "Elbows drift forward.", "Momentum instead of curling.", "Fast uncontrolled lowering."],
    tips: ["Full controlled range beats heavier weight.", "Do not force supination if the forearm is irritated."],
    variants: ["Alternating", "Hammer curl", "Incline curl", "Concentration curl"]
  },
  {
    id: "barbell-bicep-curl", title: "Barbell biceps curl", group: "Arms", level: "Beginner · intermediate · advanced",
    primary: ["Biceps"], secondary: ["Brachialis", "Brachioradialis", "Forearms"],
    video: "https://balans-gamma.vercel.app/videos/exercises/bar_curl.mp4",
    technique: ["Stand stable with an approximately shoulder-width grip.", "Keep shoulders pinned to the torso.", "Flex the elbows without swinging the trunk.", "Lower to a controlled arm extension."],
    mistakes: ["Swinging and leaning back.", "Elbows travel forward.", "Wrists collapse.", "Negative phase too fast."],
    tips: ["An EZ-bar may be easier on wrists and elbows.", "Leave reps in reserve if tendons are sensitive."],
    variants: ["EZ-bar", "Close grip", "Wide grip", "Preacher curl"]
  },
  {
    id: "triceps-rope-pushdown", title: "Triceps rope pushdown", group: "Arms", level: "Beginner · intermediate · advanced",
    primary: ["Triceps"], secondary: ["Forearms", "Core"],
    video: "https://balans-gamma.vercel.app/videos/exercises/triceps_rope_pushdown.mp4",
    technique: ["Attach the rope to the high pulley and set a stable stance.", "Pin elbows to your sides.", "Extend the arms and slightly spread the rope at the bottom.", "Return slowly without moving the shoulders."],
    mistakes: ["Elbows drift forward.", "Torso swings.", "Incomplete extension.", "Shoulders shrug up."],
    tips: ["Upper arms stay fixed.", "Do not add weight at the expense of elbow control."],
    variants: ["Straight bar", "Single arm", "Reverse grip", "V-bar"]
  },
  {
    id: "lying-triceps-extension", title: "Lying triceps extension", group: "Arms", level: "Intermediate · advanced",
    primary: ["Triceps"], secondary: ["Forearms", "Front deltoid — stabilization"],
    video: "https://balans-gamma.vercel.app/videos/exercises/lying_triceps_extension.mp4",
    technique: ["Lie stable with the bar or dumbbells over the shoulders.", "Fix the shoulders; bend mainly at the elbows.", "Lower toward the forehead or behind the head on a comfortable path.", "Extend the elbows without flaring the shoulders."],
    mistakes: ["Elbows flare wide.", "Shoulders move actively.", "Load too heavy.", "Dropping weight quickly toward the head."],
    tips: ["EZ-bar or dumbbells are often easier than a straight bar.", "If the elbows bother you, switch to cable pushdowns."],
    variants: ["EZ-bar", "Dumbbells", "Incline bench", "Behind the head"]
  }
];

const exerciseDialog = document.querySelector("#exercise-dialog");
const exerciseDialogContent = document.querySelector("#exercise-dialog-content");
let exerciseDialogOpener = null;

function listMarkup(items) {
  return items.length ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "<p>—</p>";
}

function openExercise(exercise, opener) {
  exerciseDialogOpener = opener;
  exerciseDialogContent.innerHTML = `
    <div class="exercise-dialog-head">
      <div><p class="eyebrow">${exercise.group}</p><h2 id="exercise-dialog-title">${exercise.title}</h2></div>
      <span>${exercise.level}</span>
    </div>
    <div class="exercise-video-wrap">
      <video controls playsinline preload="metadata" src="${exercise.video}">Your browser does not support video.</video>
      <a href="${exercise.video}" target="_blank" rel="noopener">Open video in new tab ↗</a>
    </div>
    <div class="muscle-grid">
      <div><h3>Primary muscles</h3>${listMarkup(exercise.primary)}</div>
      <div><h3>Secondary muscles</h3>${listMarkup(exercise.secondary)}</div>
    </div>
    <div class="exercise-detail-grid">
      <section><h3>Technique</h3>${listMarkup(exercise.technique)}</section>
      <section class="mistakes"><h3>Common mistakes</h3>${listMarkup(exercise.mistakes)}</section>
      <section><h3>Recommendations</h3>${listMarkup(exercise.tips)}</section>
      <section><h3>Variations</h3>${listMarkup(exercise.variants)}</section>
    </div>
    <p class="exercise-safety">If pain increases, form breaks down, or you cannot perform the movement confidently, reduce load, adjust range of motion, or choose an alternative exercise.</p>`;
  exerciseDialog.showModal();
  exerciseDialog.querySelector("video").focus();
}

if (exerciseDialog && exerciseCards.length) {
  exerciseCards.forEach((card, index) => {
    const exercise = exerciseDetails[index];
    if (!exercise) return;
    card.dataset.exercise = exercise.id;
    const button = document.createElement("button");
    button.className = "exercise-open";
    button.type = "button";
    button.textContent = "Details →";
    button.setAttribute("aria-label", `Open exercise: ${exercise.title}`);
    button.addEventListener("click", () => openExercise(exercise, button));
    card.append(button);
  });

  exerciseDialog.querySelector(".dialog-close").addEventListener("click", () => exerciseDialog.close());
  exerciseDialog.addEventListener("click", (event) => {
    if (event.target === exerciseDialog) exerciseDialog.close();
  });
  exerciseDialog.addEventListener("close", () => {
    const video = exerciseDialog.querySelector("video");
    if (video) video.pause();
    exerciseDialogOpener?.focus();
  });
}
