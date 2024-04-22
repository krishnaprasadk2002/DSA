class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdges(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }

        for(let advertex of this.adjacencyList[vertex]){
            this.removeEdges(vertex,advertex)
        }

        delete this.adjacencyList[vertex]
    }

    hasEdges(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+" -> "+[...this.adjacencyList[vertex]]);
        }
    }

    BFS(startinVertex){
        let visited = {}
        let queue = []

        visited[startinVertex] = true
        queue.push(startinVertex)

        while(queue.length){
            let vertex = queue[0]
            console.log(vertex);
            queue.shift()

            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            });
        }

        for(let vertex in this.adjacencyList){
            if(!visited[vertex]){
                visited[vertex] = true
                console.log(visited);
            }
        }
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdges('A','B')
graph.addEdges('B','C')

graph.display()

console.log(graph.hasEdges('A','B'))

graph.removeEdges("A","B")
graph.display()


console.log('BFS__________');
graph.BFS('A')