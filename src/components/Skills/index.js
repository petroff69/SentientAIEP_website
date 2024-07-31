import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
          Current AI systems excel at logical and data-driven tasks, but they often falter when it comes to understanding the emotional states of their users. They can detect basic sentiments like happiness or anger but fail to grasp the complexity of human emotions. Additionally, these systems lack self-awareness; they cannot adapt their responses based on past interactions or the emotional nuances of a conversation.
          </p>
          <p>
          Sentient AI seeks to bridge this gap by creating machines that can understand, recognize, and respond to human emotions in a way that feels genuinely empathetic. We are developing an AI bot that doesn't just respond based on pre-programmed logic but adapts and reacts with genuine empathy. Imagine interacting with a chatbot that not only listens to your words but also understands the feelings behind them, offering responses that are comforting, supportive, and contextually appropriate.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
