# 一、graphlib

> https://juejin.cn/post/7079732431116304397#heading-44

导出内容：
- `Graph` : Graph类，提供了图的各种操作方法
-  `json` : 工具函数，用于图转为json，或者由json格式化一个图
-   `alg` : 图的各种算法实现

## 1、`Graph`类

### 构造函数
```ts
directed?: boolean; // default: true. 是否为有向图
multigraph?: boolean; // default: false.两节点之间，是否允许多个边
compound?: boolean; // default: false.图是否允许复合点
```

### 实例方法
`graph.setGraph(value)`:
> 设置整个graph的值，一些graph的参数，如宽高等，一般是设置一个空对象

`graph.graph()`:
> 获取graph的值

`graph.setNode(node_id,[value])`:
> 在图中创建或更新节点的值，

`graph.removeNode(node_id)`:
> 移除某个节点，同时会移除这个节点的边

`graph.setEdge(node_id1,node_id2,label,[name])`:
> 给两个节点设置或更新边信息

`graph.removeEdge(node_id1,node_id2)`:
> 移除两个节点的边

`graph.setDefaultNodeLabel(obj)`:
> 设置一个默认的节点value,可以是一个函数(node)=>obj

`graph.setDefaultEdgeLabel(obj)`:
> 给边设置一个默认的节点

`graph.nodes()`:
> 获取所有的节点，返回节点id的列表

`graph.node(id)`:
> 根据id，查询节点信息

`graph.edges()`:
> 获取所有的边，返回边列表

`graph.edge(source_id,target_id)`:
> 根据起始的节点id，查询一条边

`graph.sources()`:
> 返回没有入边的节点

`graph.sinks()`:
> 返回所有没有出边的节点

`graph.predecessors(node_id)`:
> 返回当前节点的所有的祖先节点

`graph.parent(node_id)`:
> 返回当前节点的父节点（TODO: 和predecessors区别是什么）

`graph.successors(node_id)`:
> 返回当前节点的所有后序节点

`graph.children(node_id)`:
> 返回当前节点的所有子节点

`graph.inEdges(node_id)`:
> 查询某个节点的所有入边

`graph.outEdges(node_id)`:
> 查询某个节点的所有出边

`graph.nodeEdges(node_id)`:
> 查询某个节点，所有的边，包括入边和出边

## 2、`alg`算法工具类

## 3、`json`转换工具

`json.write(graph)`:
> 根据图，生成一个json，json包括了options、nodes、edges

`json.read(json)`:
> 根据一段json结构，生成一个graph


# 二、dagre
> https://github.com/dagrejs/dagre/wiki

## `layout`方法
`layout(graph,config)=>`:

生成绘制树，config参数说明如下：
| 值          | 默认值            | 说明                                                                             |
| ----------- | ----------------- | -------------------------------------------------------------------------------- |
| rankdir     | TB                | 排列节点的方向，T是上，B是下，L是左，R是右                                       |
| align       | undefined         | 排列节点的对齐方式，U=上，D=下，L=左，R=右                                       |
| nodesep     | 50                | 节点的水平间距                                                                   |
| edgesep     | 10                | 线的水平间距                                                                     |
| ranksep     | 50                | 排列间距，就是层间距                                                             |
| marginx     | 0                 | 图的左右间距                                                                     |
| marginy     | 0                 | 图上下间距                                                                       |
| acyclicer   | undefined         | 环模式，如果设置为`greedy`，则会返回可移除的边列表，使图无环                     |
| ranker      | `network-simplex` | 使用哪种布局算法，默认是`network-simplex`，可选的还有`tight-tree`,`longest-path` |
| width       | 0                 | 节点宽度                                                                         |
| height      | 0                 | 节点高度                                                                         |
| minlen      | 1                 | 线的最小长度                                                                     |
| weight      | 1                 | 线的权重，权重越高，线越短直                                                     |
| width       | 0                 | 线的label的宽度                                                                  |
| height      | 0                 | 线的label的高度                                                                  |
| labelpos    | `r`               | 线的label的位置，l=左，c=中间，r=右侧                                            |
| labeloffset | 10                | label和边的距离，当label的定位是`l`和`r`时生效                                   |

生成布局图的一些属性
| 范围       | 值     | 说明                             |
| ---------- | ------ | -------------------------------- |
| graph      | height | 图的高度                         |
| graph      | width  | 图的宽度                         |
| node，edge | x，y   | 节点的中心坐标，或者线的中心坐标 |
| edge       | points | {x，y}构成的线的控制点           |




























