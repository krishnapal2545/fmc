import source from "./Src";
import goal from "./Dist"; 
export default function miniCost(graph,choice) {
    let I = Number.MAX_SAFE_INTEGER;
    let V = graph.length
    let visited = new Array(V).fill(0);
    let s = source(choice), t = goal(choice);
    let WIN = 0;
    visited[s] = 1;
    var mcpath = new Array();
    let adjList = new Array(V);
    for (let i = 0; i < V; i++) adjList[i] = [];
    for(let i=0;i<V;i++){
        for(let j=0;j<V;j++){
            if(graph[i][j] != I){
                addEdge(i,j);
            }
        }
    }
    WIN = minimumCostSimplePath(s, t, visited, graph);
    console.log(WIN);
    printAllPaths(s, t);
    function minimumCostSimplePath(u, destination, visited, graph) {
        if (u == destination)
            return 0;
        visited[u] = 1;
        let ans = I;
        for (let i = 0; i < V; i++) {
            if (graph[u][i] != I && !visited[i]) {
                let curr = minimumCostSimplePath(i, destination, visited, graph);
                ans = Math.min(ans, graph[u][i] + curr);
            }
        }
        visited[u] = 0;
        return ans;
    }
    function addEdge(u,v){
        // Add v to u's list.
        adjList[u].push(v);
    }
    function printAllPaths(s,d) {
        let isVisited = new Array(V);
        for(let i=0;i<V;i++)
            isVisited[i]=false;
            let pathList = [];
            // add source to path[]
            pathList.push(s);
            // Call recursive utility
            printAllPathsUtil(s, d, isVisited, pathList);
    }

    function printAllPathsUtil(u,d,isVisited,localPathList){
        if (u == (d)) {
            let path = localPathList;
            let sum = 0;
            for(let m=0 ; m < path.length-1;m++){
                sum += graph[path[m]][path[m+1]];
            }
            if(sum == WIN){
                mcpath.length = 0;
                for(let i =0 ; i<path.length-1;i++) mcpath.push(graph[path[i]][path[i+1]]);
                console.log(mcpath);
                return;
            }
            // if match found then no need to
            // traverse more till depth
            return ;
        }
        // Mark the current node
        isVisited[u] = true;

        // Recur for all the vertices
       // adjacent to current vertex
       for (let i=0;i< adjList[u].length;i++) {
            if (!isVisited[adjList[u][i]]) {
                // store current node
                // in path[]
                localPathList.push(adjList[u][i]);
                printAllPathsUtil(adjList[u][i], d,
                isVisited, localPathList);
                // remove current node
                // in path[]
                localPathList.splice(localPathList.indexOf
                (adjList[u][i]),1);
            }
        }
        // Mark the current node
        isVisited[u] = false;
    }   
    return [WIN,mcpath]; 
}
