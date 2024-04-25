/**
 * The program is the triangle calculation program
 *
 * By: Michael Zagon
 * Version: 1.0
 * Since:   2024-04-24
 */

// Imports
import Triangle from './Triangle'
import { createPrompt } from 'bun-promptx'

// the beginning of the program
console.log('Enter your triangles sides(cm)')
const sA = prompt('Enter your first side: ')
const sideA = parseFloat(sA)
const sB = prompt('Enter your second side: ')
const sideB = parseFloat(sB)
const sC = prompt('Enter your third side: ')
const sideC = parseFloat(sC)
console.log(' ')

try {
  // Checks if any side is less than or equal to 0
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.log('Invalid Input, Side can not be less than 1!')
    // Checks if any input is a number
  } else if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log('Invalid Input, not a Integer')
  } else {
    // defining triangle
    const triangle = new Triangle(sideA, sideB, sideC)

    // The three sides
    triangle.status()
    console.log('\nThe three sides were')
    console.log(`Side A ---> ${triangle.getSideA()} cm`)
    console.log(`Side B ---> ${triangle.getSideB()} cm`)
    console.log(`Side C ---> ${triangle.getSideC()} cm`)

    // The shape of the triangle
    console.log(`The type is a ${triangle.triangleName()}`)

    // The semi permieter calculation
    console.log(`The semiperimeter is ${triangle.triangleSemiperimeter()} cm`)

    // The area calculation
    console.log(`The area is ${triangle.triangleArea().toFixed(4)} cm²`)

    // This is angle A
    console.log('Angle A is ' + triangle.triangleAngle(1).toFixed(4) + ' rad')

    // This is angle B
    console.log('Angle B is ' + triangle.triangleAngle(2).toFixed(4) + ' rad')

    // This is angle C
    console.log('Angle C is ' + triangle.triangleAngle(3).toFixed(4) + ' rad')

    // This is the height of sideA
    console.log(
      `The height of side A is ${triangle.triangleHeight(1).toFixed(4)} cm`
    )

    // This is the height of sideB
    console.log(
      `The height of side B is ${triangle.triangleHeight(2).toFixed(4)} cm`
    )

    // This is the height of sideC
    console.log(
      `The height of side C is ${triangle.triangleHeight(3).toFixed(4)} cm`
    )

    // This is the triangleRadius
    console.log(
      `The inner circle radius is ${triangle.innerCircleRadius().toFixed(4)} cm`
    )

    // This is the circumCircle
    console.log(
      `The circum circle radius is ${triangle
        .circumRadiusTriangle()
        .toFixed(4)} cm`
    )
  }
} catch (e) {
  console.log('Not a Valid Input')
}
console.log('\nDone.')
