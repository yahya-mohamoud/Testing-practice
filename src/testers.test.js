import { analyzeArr,
         avgArr,
         calculate,
         capitalize,
         cipher,
         lengthArr,
         maxArr,
         minArr,
         reverse } from "./testers"

describe ("check if the first letter is capitalized", () => {
    test('is it the first capitalized', () => {
        expect(capitalize("cali")).toBe("Cali");
    })

    test("check single character", () => {
        expect(capitalize("a")).toBe("A") 
    })
})

test("reverse strings", () => {
    expect(reverse("hello world")).toBe("dlrow olleh")
})

describe("calculator tests", () => {
    test("calcalate normal addition", () => {
        expect(calculate.add(10, 2)).toBe(12)

    })

    test("calculate one negative and one positive number", () => {
        expect(calculate.add(-1, 2)).toBe(1)
        expect(calculate.add(10, -2)).toBe(8)
    })

    test("substract one or two negative numbers", () => {
        expect(calculate.sub(-2, -2)).toBe(0)
        expect(calculate.sub(-2, 4)).toBe(-6)
    })
    
    test("sub normal two numbers", () => {
        expect(calculate.sub(10, 2)).toBe(8)
        expect(calculate.sub(7, 14)).toBe(-7)
    })

    test("multiplication of one or two negative numbers", () => {
        expect(calculate.mul(10, -2)).toBe(-20)
        expect(calculate.mul(-10, 2)).toBe(-20)
        expect(calculate.mul(-10, -2)).toBe(20)
    })

    test("multiplication of two normal numbers", () => {
        expect(calculate.mul(10, 2)).toBe(20)
        expect(calculate.mul(10.2, 2)).toBe(20.4)
    })

    test("divide two normal numbers", () => {
        expect(calculate.div(10, 5)).toBe(2)
        expect(calculate.div(50, 5)).toBe(10)
    })

    test("divide between one or two negative numbers", () => {
        expect(calculate.div(-10, 5)).toBe(-2)
        expect(calculate.div(50, -5)).toBe(-10)
        
    })

    test("divide by zero", () => {
        expect(() => div(5, 0).toThrow("Error"))
    })
    
})

describe("checks and encrypt in ceaser cipherText", () => {
    test("convert normal text into ceaser cipher", () => {
        expect(cipher("hello world", 3)).toBe("khoor zruog")
    })
})

test("average of the array", () => {
    expect(avgArr([2,1,4,3,6,5])).toBe(3.5)
})

test("min of the array", () => {
    expect(minArr([2, 1, 4, 3, 6, 5])).toBe(1)
})

test("max number of the array", () => {
    expect(maxArr([2, 1, 4, 3, 6, 5])).toBe(6)
})

test("length of the array", () => {
    expect(lengthArr([1,4,3,6,5,2])).toBe(6)
})


describe("anlayze arrays", () => {
   test("analyze arrays", () => {
    
    const objects = analyzeArr([1,4,3,6,5,2])
    
    expect(objects).toEqual({
            average: 3.5,
            min: 1,
            max: 6,
            length: 6
        })
   })
})