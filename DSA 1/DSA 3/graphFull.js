class Graph{
    constructor(){
        this.adjlist = {}
    }

    addVertex(vertex){
        if(!this.adjlist[vertex]){
            this.adjlist[vertex] = new Set()
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.adjlist[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjlist[vertex2]){
            this.adjlist(vertex2)
        }

        this.adjlist[vertex1].add(vertex2)
        this.adjlist[vertex2].add(vertex1)
    }

    hasEdges(vertex1,vertex2){
        return (
            this.adjlist[vertex1].has(vertex2) &&
            this.adjlist[vertex2].has(vertex1)
        )
    }

    removeEdges(vertex1,vertex2){
        this.adjlist[vertex1].delete(vertex2)
        this.adjlist[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjlist[vertex]){
            return 
        }

        for(let advertex in this.adjlist[vertex]){
            this.removeEdges(vertex,advertex)
        }

        delete this.addVertex[vertex]
    }

    BFS(startVertex){
        let visited = {}
        let result = []
        let queue = [startVertex]

        visited[startVertex] = true

        while(queue.length){
            let vertex = queue.shift()
            result.push(vertex)

            for(let neighbor of this.adjlist[vertex]){
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    result.push(neighbor)
                }
            }
        }
        return result
    }

    DFS(startVertex){
        let visited = {}
        let result = []
        let stack = [startVertex]

        visited[startVertex] = true

        while(stack.length){
            let vertex = stack.pop()
            result.push(vertex)

            for(let neighbour of this.adjlist[vertex]){
                if(!visited[neighbour]){
                    visited[neighbour]= true
                    result.push(neighbour)
                }
            }
        }
        return result
    }

    display(){
        for(let vertex in this.adjlist){
            console.log(vertex + " -> " + [...this.adjlist[vertex]]);
        }
    }
    

}

const graph = new Graph()

graph.addVertex(35)
graph.addVertex(10)
graph.addVertex(30)
graph.addVertex(60);
graph.addVertex(5);
graph.addVertex(20);


graph.addEdges(35,10)
graph.addEdges(30,10)
graph.addEdges(35,30);
graph.addEdges(5,20);
graph.display()

console.log('BFS__________',graph.BFS(10));


console.log('DFS__________',graph.DFS(10));
