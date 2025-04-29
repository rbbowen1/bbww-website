

<!-- ////////////////////////// -->


<div className="flex max-w-[800px] flex-col gap-4">
  <video
    autoPlay
    loop
    muted
    src="/previews/components/core/dev.mp4"
    className="w-full rounded-xl border shadow-2xl"
  />
  <div className="flex w-full flex-col gap-2 sm:flex-row">
     <Linkpreview  href="https://karthik-mudunuri.vercel.app/">
      Live Preview{" "}
    </Linkpreview>
    <Linkpreview  href="https://github.com/karthikmudunuri/karthikmudunuri.site">
      Visit Repo{" "}
    </Linkpreview>

  </div>
</div>


<br/>







<!-- ////////////////////////////////////// -->
<ComponentPreview
  name="demos/components/core/globeanime/tag"
  preview={`<Tag3d />`}
/>

## Installation

<Steps>
  <Step>Install the following dependencies:</Step>

```bash
npm install three @react-three/fiber @react-three/drei @react-three/rapier meshline leva
```

  <Step>Copy and paste the following code into your project.</Step>
  <ComponentSourcej name="components/core/default/3dtag" />
  <Step>Update the import paths to match your project setup.</Step>
</Steps>

## Props

| Prop      | Description                         | Type   | Default | Required |
|-----------|-------------------------------------|--------|---------|----------|
| maxSpeed  | Maximum speed for the band animation. | number | 50      | No       |
| minSpeed  | Minimum speed for the band animation. | number | 10      | No       |

<!-- ////////////////////////////////// -->
<ComponentPreview
  name="demos/components/core/sections/spotlightcard"
  preview={`<Spotlightpage />`}
/>

## Installation

<Steps>


  <Step>Copy and paste the following code into your project.</Step>
  <ComponentSource name="components/core/default/spotlight-card" />

  <Step>Add this utils file `utils/mouse-position.ts`.</Step>
  ```ts
  import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export default function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return mousePosition;
}
```



  <Step>Update the import paths to match your project setup.</Step>
</Steps>

# Props

## Spotlight component Props

| Prop Name  | Type               | Default  | Description                                                  |
|------------|--------------------|----------|--------------------------------------------------------------|
| `children` | `React.ReactNode`  | `none`   | Content to be rendered inside the spotlight container.       |
| `className`| `string`           | `''`     | Additional classes for styling the spotlight container.      |

## SpotlightCard Component Props

| Prop Name  | Type               | Default  | Description                                                  |
|------------|--------------------|----------|--------------------------------------------------------------|
| `children` | `React.ReactNode`  | `none`   | Content to be rendered inside the spotlight card.            |
| `className`| `string`           | `''`     | Additional classes for styling the spotlight card.           |


<!-- //////////////////////////////////// -->

<ComponentPreview
  name="demos/components/core/globeanime/default"
  preview={`<Globeanime/>`}
/>

## Installation

<Steps>

  <Step>Install the following dependencies:</Step>

```bash
npm install animejs lucide-react react-copy-to-clipboard typed.js
```

  <Step>Copy and paste the following code into your project.</Step>
  <ComponentSource name="components/core/default/globeanime" />

  <Step>Add background globe svg's to your project from [here](https://github.com/karthikmudunuri/eldoraui/tree/main/public/usage)
.</Step>


  <Step>Update the import paths to match your project setup.</Step>

</Steps>





<!-- /////////////////////////////////////////////// -->
<div className="flex max-w-[800px] flex-col gap-4">
  <video
    autoPlay
    loop
    muted
    src="/previews/components/core/dev.mp4"
    className="w-full rounded-xl border shadow-2xl"
  />
  <div className="flex w-full flex-col gap-2 sm:flex-row">


  </div>
</div>


<!-- //////////////////////////////// -->


## Installation

<Steps>
  <Step>Install the following dependencies:</Step>



  <Step>Copy and paste the following code into your project.</Step>
  <ComponentSourcej name="components/core/default/cobeglobe" />
  <Step>Update the import paths to match your project setup.</Step>
</Steps>

## Variants

### Draggable



### Rotate to Location



## props

| Property            | Description                                               | Required |
|---------------------|-----------------------------------------------------------|----------|
| `devicePixelRatio`  | The “`DPR`”, defaults to 1                                   |          |
| `width`             | The `width` of the canvas                                    | Required |
| `height`            | The `heigh`t of the canvas                                   | Required |
| `phi`               | The `φ` angle, 0 ≤ phi ≤ 2π                                  | Required |
| `theta`             | The `θ` angle, -π ≤ theta ≤ π                                | Required |
| `dark`              | Display the globe in dark or light mode, 0 ≤ `dark` ≤ 1      | Required |
| `diffuse`           | Control the `diffuse` lighting, 0 ≤ diffuse                  | Required |
| `mapSamples`        | Number of dots displayed, 0 ≤ `mapSamples` ≤ 100000          | Required |
| `mapBrightness`     | Brightness of the dots, 0 ≤ `mapBrightness`                  | Required |
| `mapBaseBrightness` | Brightness of samples that are not on the map, 0 ≤ `mapBaseBrightness` |          |
| `baseColor`         | [r, g, b] of the base color, `0 ≤ r, g, b ≤ 1`             |          |
| `markerColor`       | [r, g, b] of the markers’ color, `0 ≤ r, g, b ≤ 1`           |          |
| `glowColor`         | [r, g, b] of the glow color, `0 ≤ r, g, b ≤ 1`               |          |
| `scale`             | Scales the globe, 0 ≤ `scale`                                |          |
| `offset`            | `[offsetX, offsetY]`, offset of the globe in pixel           |          |
| `markers`           | An array of `markers` displayed                              |          |
| `opacity`           | The `transparency` of the globe texture                      |          |
| `onRender`          | A callback function called when a new frame is `rendered`    | Required |





<!-- /////////////////////////////////////// -->
This personalized mentoring program is designed to enhance the strategic positioning of the Management Professional’s resources function within the organization. Program elements include:



Current Investment Opportunity Click here to Register



<div className="flex max-w-[800px] flex-col gap-4">
  <video
    autoPlay
    loop
    muted
    src="/previews/components/core/dev.mp4"
    className="w-full rounded-xl border shadow-2xl"
  />
  <div className="flex w-full flex-col gap-2 sm:flex-row">
     <Linkpreview  href="https://karthik-mudunuri.vercel.app/">
      Live Preview{" "}
    </Linkpreview>
    <Linkpreview  href="https://github.com/karthikmudunuri/karthikmudunuri.site">
      Visit Repo{" "}
    </Linkpreview>

  </div>
</div>

## What is this?

A complete template to market yourself and your portfolio to the world as a developer.

## Why should I use this?

✅ Save 100+ hours of work
✅ No need to learn advanced animations
✅ Easy to configure and change
✅ 1-click download and setup
✅ 5 minutes to update the text and images
✅ Deploy live to Vercel

## Features

- Hero Section
- About Section
- Work Section
- Education Section
- Projects Section
- Contributions Section
- Hackathon Section
- Contact Section
- Blog


## Installation through CLI

<Steps>
  <Step>Clone this repository to your local machine:</Step>

```bash
git clonehttps://github.com/karthikmudunuri/karthikmudunuri.site.git
```

  <Step>Move to the cloned directory:</Step>

 ```bash
 cd karthikmudunuri.site
 ```

  <Step>Install dependencies:</Step>
  ```bash
  npm install
  ```


  <Step>Start the local Server:</Step>
  ```bash
  npm run dev
  ```

  <Step>Open the [data](https://github.com/karthikmudunuri/karthikmudunuri.site/blob/main/src/data/index.tsx) file and change the content thats it! its yours..</Step>



</Steps>

Inspired from [leerob](https://leerob.io/)





<!-- //////////////////////////////// -->

## Workshop

<Steps>

  <Step>
This workshop provides information on the factors that determine how inclusive your organization is as a whole and relative to the diverse segments of a larger community.
  </Step>


  <Step>
 You will be guided in the process of laying out a step-by-step plan of action to enhance your effectiveness and your reputation as a model of excellence and human equality.
  </Step>

  <Step>
  You will come to understand how diversity, inclusion, and intersectionality can spawn creativity, innovation, and new wealth and how compassion serves as an elixir for “wholeness.”
  </Step>

  <Step>
  Value of the workshop $2,000, current enrollment cost $999 [Click here to Register](https://buildingbetterworldsofwork.com/diversity-inclusion-innovation-and-new-wealth/)
</Step>



</Steps>
<!-- /////////////////////////////// -->


Current Investment Opportunity Click here to Register



<ComponentPreview
  name="demos/components/core/globeanime/default"
  preview={`<Globeanime/>`}
/>

## Installation

<Steps>

  <Step>Install the following dependencies:</Step>

```bash
npm install animejs lucide-react react-copy-to-clipboard typed.js
```

  <Step>Copy and paste the following code into your project.</Step>
  <ComponentSource name="components/core/default/globeanime" />

  <Step>Add background globe svg's to your project from [here](https://github.com/karthikmudunuri/eldoraui/tree/main/public/usage)
.</Step>


  <Step>Update the import paths to match your project setup.</Step>

</Steps>

<!-- //////////////////////////////////////////// -->



<div className="flex max-w-[800px] flex-col gap-4">
  <video
    autoPlay
    loop
    muted
    src="/previews/components/core/dev.mp4"
    className="w-full rounded-xl border shadow-2xl"
  />
  <div className="flex w-full flex-col gap-2 sm:flex-row">
     <Linkpreview  href="https://karthik-mudunuri.vercel.app/">
      Live Preview{" "}
    </Linkpreview>
    <Linkpreview  href="https://github.com/karthikmudunuri/karthikmudunuri.site">
      Visit Repo{" "}
    </Linkpreview>

  </div>
</div>




## Leadership Retreats, Improving Management Effectiveness, Strategizing on How to Build High Performing Organizations

Consistent with the title of his newest work, Brayton Bowen engages the Heart “…for People, Performance, and Profit” by going to the heart of where his listeners are and taking them to a higher place.

## Presentations that Inspire and Motivate Others to Make a Difference in the World

✅ Save 100+ hours of work

✅ No need to learn advanced animations

✅ Easy to configure and change

✅ 1-click download and setup

✅ 5 minutes to update the text and images

✅ Deploy live to Vercel


In his new workshops on the Seven Competencies of Compassion@Work, Brayton explores each of the Competencies of Compassion and Inspires his audiences to implement life-changing principles that can improve the lives of his listeners and drive organizational performance up to 40% and more compared to peer and competitor organizations. Whether the need is for a keynote speaker, trainer, or meeting opener, Brayton can make a difference.

Presentations that Inspire and Motivate Others to Make a Difference in the World

Contact Brayton@BuildingBetterWorldsOfWork.com for information

Speaker Bio for Brayton Bowen, AM, SHRM-SCP
Brayton Bowen is a thought-leader on new-age motivation and organizational performance. He has more than 25 years of experience in business and human resource development. He speaks to a diverse group of audiences including business associations, recent college graduates, human resource professionals, and business leaders from all sectors of the economy.

As a professional speaker, Brayton instantly connects with audiences with his insightful and engaging presentation style. He shares decades of business experience, innovative motivational strategies, and practical ideas.

Brayton is also an author of numerous articles, books, and commentaries on business. He can be reached at: Brayton@BuildingBetterWorldsOfWork.com




## Features

- Hero Section
- About Section
- Work Section
- Education Section
- Projects Section
- Contributions Section
- Hackathon Section
- Contact Section
- Blog


## Installation through CLI

<Steps>
  <Step>Clone this repository to your local machine:</Step>

```bash
git clonehttps://github.com/karthikmudunuri/karthikmudunuri.site.git
```

  <Step>Move to the cloned directory:</Step>

 ```bash
 cd karthikmudunuri.site
 ```

  <Step>Install dependencies:</Step>
  ```bash
  npm install
  ```


  <Step>Start the local Server:</Step>
  ```bash
  npm run dev
  ```

  <Step>Open the [data](https://github.com/karthikmudunuri/karthikmudunuri.site/blob/main/src/data/index.tsx) file and change the content thats it! its yours..</Step>



</Steps>

Inspired from [leerob](https://leerob.io/)













<!-- /////////////////////////////////////////////////// -->



<div className="flex max-w-[800px] flex-col gap-4">
  <video
    autoPlay
    loop
    muted
    src="/previews/components/core/portfolio.mp4"
    className="w-full rounded-xl border shadow-2xl"
  />
  <div className="flex w-full flex-col gap-2 sm:flex-row">
     <Linkpreview  href="https://karthikeyavarmamudunuri.vercel.app/">
      Live Preview{" "}
    </Linkpreview>
    <Repodownload  href="https://github.com/karthikmudunuri/portfolio-template">
      Download Here {" "}
    </Repodownload>
  </div>
</div>




<div className="flex max-w-[800px] flex-col gap-4">
  <video
    autoPlay
    loop
    muted
    src="/previews/components/core/dev.mp4"
    className="w-full rounded-xl border shadow-2xl"
  />
  <div className="flex w-full flex-col gap-2 sm:flex-row">
     <Linkpreview  href="https://karthik-mudunuri.vercel.app/">
      Live Preview{" "}
    </Linkpreview>
    <Linkpreview  href="https://github.com/karthikmudunuri/karthikmudunuri.site">
      Visit Repo{" "}
    </Linkpreview>

  </div>
</div>


 video: /previews/components/core/globeanime.mov
  video: /previews/components/core/dev.mp4






<ComponentPreview
  name="demos/components/core/globeanime/default"
  preview={`<DEI/>`}
/>

<ComponentPreview
  name="demos/components/core/text/searchmodal"
  preview={`<Searchmodal />`}
/>


  <ComponentSource name="components/core/default/globeanime" />


<ComponentPreview
  name="demos/components/core/cobeglobe/default"
  preview={`<Cobe />`}
/>




```bash
  npm install cobe
```

<ComponentPreview
  name="demos/components/core/cobeglobe/draggable"
  preview={`<Cobe />`}
/>

### Draggable & Auto Rotate

<ComponentPreview
  name="demos/components/core/cobeglobe/dragauto"
  preview={`<Cobe />`}
/>






<ComponentPreview
  name="demos/components/core/cobeglobe/rotate"
  preview={`<Cobe />`}
/>

### Scaled

<ComponentPreview
  name="demos/components/core/cobeglobe/scaled"
  preview={`<Cobe />`}
/>







```bash
npm install animejs lucide-react react-copy-to-clipboard typed.js
```






<div align="center">
  <a href="https://github.com/karthikmudunuri/eldoraui">


 <img src="https://github.com/user-attachments/assets/d00f15e8-cc1a-47a6-b99f-885156a55fc3" alt="Logo" width="60" height="60">


  </a>
  <h1 align="center">Eldora UI</h1>
  <p align="center">
   open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion
100% open-source, and customizable.
  </p>
  <p>

   <a href="https://www.eldoraui.site/">Visit site</a>
    ·
    <a href="https://github.com/karthikmudunuri/eldoraui/issues">Report Bug</a>
    ·
    <a href="https://github.com/karthikmudunuri/eldoraui/issues">Request Feature</a>
  </p>

  <img src="https://github.com/user-attachments/assets/f0aacc0a-5c5e-476c-9419-bff399092310" alt="preview">
</div>

<!-- ABOUT THE PROJECT -->


## Explore components

Visit [https://www.eldoraui.site/components](https://www.eldoraui.site/components) to view the documentation.

## About The Project

 open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion.
100% open-source, and customizable.

## Activity

![Alt](https://repobeats.axiom.co/api/embed/35271c3244e24efbae34731d1ee21d0988f8fc0e.svg "Repobeats analytics image")


## License

Licensed under the [MIT license.](https://github.com/karthikmudunuri/eldoraui/blob/main/LICENSE)

## Contributing

visit this [Documentation](https://github.com/karthikmudunuri/eldoraui/blob/main/CONTRIBUTING.md)
