export default class MinHeap {
    public length: number
    private data: number[]

    constructor() {
        this.data = []
        this.length = 0
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.heapifyUp(this.length)
        this.length++
    }
    delete(): number {
        if (this.length === 0) {
            return -1
        }

        const out = this.data[0]
        if (this.length === 1) {
            this.data = []
            return out
        }

        this.length--
        this.data[0] = this.data[this.length]
        this.heapifyDown(0)

        return out
    }

    private heapifyDown(index: number): void {
        if (index >= this.length) {
            return
        }

        const leftIndex = this.leftChild(index)
        const rightIndex = this.rightChild(index)

        if (index >= this.length || leftIndex >= this.length) {
            return
        }

        const leftValue = this.data[leftIndex]
        const rightValue = this.data[rightIndex]
        const value = this.data[index]

        if (leftValue > rightValue && value > rightValue) {

            this.data[index] = rightValue
            this.data[rightIndex] = value
            this.heapifyDown(rightIndex)
        } else if (rightValue > leftValue && value > leftValue) {

            this.data[index] = leftValue
            this.data[leftValue] = value
            this.heapifyDown(leftIndex)
        }
    }

    private heapifyUp(index: number): void {
        if (index === 0) {
            return
        }

        const p = this.parent(index)
        const parentV = this.data[p]
        const value = this.data[index]

        if (parentV > value) {
            this.data[index] = parentV
            this.data[p] = value
            this.heapifyUp(p)
        }
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    private leftChild(index: number): number {
        return index * 2 + 1
    }

    private rightChild(index: number): number {
        return index * 2 + 1
    }
}