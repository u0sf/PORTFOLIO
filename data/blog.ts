export interface BlogPost {
  id: number
  title: string
  slug: string
  date: string
  excerpt: string
  image: string
  tags: string[]
  content: string
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "How to Build Your First Project(Hardware)",
    slug: "how-to-build-your-first-project",
    date: "2025-05-23",
    excerpt: "In this blog, I'll walk you through the practical steps of building your first real project, based on my experience with one of the most valuable projects I've ever worked on: ViVision.",
    image: "/images/blog/vivision-cover.jpeg",
    tags: ["Projects", "Engineering", "Self-Learning"],
    content: `
# How to Build Your First Project

## Introduction
This blog isn't just theory — it's a step-by-step guide based on my own hands-on experience.  
While **ViVision** wasn't my first project, it was one of the **most impactful and educational** ones I've ever worked on.

So I'm sharing the process I followed — from idea to execution — so you can do the same with your own project.

## 1. Find a Real Problem to Solve
The hardest part of any project is the idea.

Start by identifying a real-world problem. Search for what others have tried — you might find a project that failed or only partially worked, which you can improve upon.

**In my case**, all the available solutions were either impractical or didn't work well — so I created a new one. That's how **ViVision** started.

## 2. Choose Your Components and Set a Budget
Once the idea is clear, it's time to:
- List the hardware you'll need
- Set an estimated budget

Having a rough budget helps you stay on track and make smarter decisions.

Even if your final cost varies a bit, **planning ahead matters a lot**.

## 3. Simulate First Before Using Real Hardware
Don't rush into wiring things up. First, simulate your circuit and test the code virtually.

**Why?**  
Because it saves you from damaging expensive components.  
Trust me — I've learned that the hard way on other projects.

**Recommended Simulators:**
- [WokWi](https://wokwi.com/)
- [Tinkercad](https://www.tinkercad.com/)

## 4. Design the PCB (Printed Circuit Board)
Once your circuit and code work on the simulator and breadboard, it's time to design a **PCB**.

**Why bother?**  
Breadboards are great for testing, but they're not stable for final builds. One loose wire and your whole project can stop working.

**Best tools for PCB design:**
- [Fritzing](http://fritzing.org/)
- [EasyEDA](https://easyeda.com/)

## 5. Assemble Your Hardware
Now you're ready to assemble the actual components.  
Mount everything according to the PCB layout, double-check the connections, and power it up.

## 6. Document and Publish Your Work
Finishing the project isn't the last step.  
You need to **document** and **share** it.

**Why?**  
If someone recreates your idea later, how will people know it was yours?

Here's what you should do:
- Record videos while building and testing
- Write a README file explaining the concept
- Upload everything to [GitHub](https://github.com), even if you make it private

**Want an example?**  
Here's the GitHub repo for **ViVision**:  
👉 [https://github.com/u0sf/ViVision](https://github.com/u0sf/ViVision)

## Final Thoughts
Your first project doesn't need to be massive.  
What matters is that it's **real**, **teaches you something**, and **solves a problem**.

Start simple — and who knows, maybe your project will become as meaningful to you as ViVision is to me.
    `
  }
] 