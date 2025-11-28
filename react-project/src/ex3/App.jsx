const goals = [
{
title: 'Learn React',
description: 'In-Depth',
},
{
title: 'Learn React Features',
description: 'Hooks, etc...',
},
{
title: 'Rect Environment Setup',
description: 'Be able to setup dev evironment...',
},
];

//Modify component to make it dynamic. Hint: use props
export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Practice Time!</h1>
      <p>Course Goals</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components */}
        <CourseGoal title="Learn React" description="In-depth" />
        <CourseGoal title="Practice JavaScript" description="Daily coding" />
      </ul>
    </div>
  );
}

export default App;
