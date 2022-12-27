from collections import deque


def dfs(v):
    print(v, end=' ')
    visited[v] = True
    print("🚀 ~ file: test.py:7 ~ visited", visited)
    print("🚀 ~ file: test.py:7 ~ adj", adj)
    print("🚀 ~ file: test.py:7 ~ v", v)
    for e in adj[v]:
        if not (visited[e]):
            dfs(e)


def bfs(v):
    q = deque([v])

    while q:
        v = q.popleft()
        if not (visited[v]):
            visited[v] = True
            print(v, end=' ')
            for e in adj[v]:
                if not (visited[e]):
                    q.append(e)


n, m, v = map(int, input().split())
adj = [[] for _ in range(n + 1)]

for _ in range(m):
    x, y = map(int, input().split())
    adj[x].append(y)
    adj[y].append(x)
print("testset", adj)

for e in adj:
    e.sort()

visited = [False] * (n + 1)
dfs(v)
print()
visited = [False] * (n + 1)
bfs(v)
