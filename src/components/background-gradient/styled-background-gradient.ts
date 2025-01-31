import styled, { keyframes } from 'styled-components'

import type { StyledInteractiveProps } from './types-background-gradient'

const moveInCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const moveVertical = keyframes`
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
`

const moveHorizontal = keyframes`
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
`

export const StyledBackgroundGradient = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 0;
  top: 0;
  left: 0;

  svg {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
  }

  .gradients-container {
    filter: url(#goo) blur(40px);
    width: 100%;
    height: 100%;
  }

  .g1 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-1'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0.6)`
          }}
          0%,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-1'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0)`
          }}
          50%
      )
      no-repeat;
    mix-blend-mode: hard-light;

    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);

    transform-origin: center center;
    animation: ${moveVertical} 30s ease infinite;
  }

  .g2 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-2'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0.8)`
          }}
          0%,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-2'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0)`
          }}
          50%
      )
      no-repeat;
    mix-blend-mode: hard-light;
    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);
    transform-origin: calc(50% - 400px);
    animation: ${moveInCircle} 20s reverse infinite;
  }

  .g3 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-3'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0.6)`
          }}
          0%,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-3'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0)`
          }}
          50%
      )
      no-repeat;
    mix-blend-mode: hard-light;
    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2 + 200px);
    left: calc(50% - 80% / 2 - 500px);
    transform-origin: calc(50% + 400px);
    animation: ${moveInCircle} 40s linear infinite;
  }

  .g4 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-4'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0.6)`
          }}
          0%,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-4'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0)`
          }}
          50%
      )
      no-repeat;
    mix-blend-mode: hard-light;
    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);
    transform-origin: calc(50% - 200px);
    animation: ${moveHorizontal} 40s ease infinite;
  }

  .g5 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-5'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0.6)`
          }}
          0%,
        ${({ theme }) => {
            const hsl = theme.colors['colorful-5'].replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0)`
          }}
          50%
      )
      no-repeat;
    mix-blend-mode: hard-light;
    width: 80%;
    height: 80%;
    top: calc(50% - 80%);
    left: calc(50% - 80%);
    transform-origin: calc(50% - 800px) calc(50% + 200px);
    animation: ${moveInCircle} 40s ease infinite;
  }
`

export const InteractiveBubble = styled.div<StyledInteractiveProps>`
  position: absolute;
  background: radial-gradient(
      circle at center,
      ${({ theme }) => {
          const hsl = theme.colors['colorful-6'].replace('hsl(', '').replace(')', '')
          return `hsla(${hsl}, 0.6)`
        }}
        0%,
      ${({ theme }) => {
          const hsl = theme.colors['colorful-6'].replace('hsl(', '').replace(')', '')
          return `hsla(${hsl}, 0)`
        }}
        50%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  width: 80%;
  height: 80%;
  top: calc(50% - 80%);
  left: calc(50% - 80%);
  transform: translate(${p => p.$x - 100}px, ${p => p.$y - 100}px);
`
