---
title: 基于边松弛的最短路算法性质
category: Study Note
---

> **Definition** : $\delta(s, v)$ 表示 $s$ 到 $v$ 的最短路(如果存在)的距离, 没有路可达就是 $\infty,$ 如果 $s$ 到 $v$ 的某条路上有负权重环, 此时不认为存在最短路, $\delta$ 是 $-\infty.$

> **初始化** : $v.d = \infty,$ $s.d = 0.$


> **Lemma (Triangle inequality)** : 设 $G = (V, E)$ 是有向带权图, $s$ 为源点, 那么对任意的边 $(u, v) \in  E,$ 有 $$\delta(s, v) \leq \delta(s, u) + w(u, v)$$

证明 : 如果 $\delta(s, u) = \infty,$ 明显成立. 假设 $u$ 可达, 若 $u$ 在某个负权重环上, 那么由于 $(u, v)$ 存在, 所以 $\delta(s, v) = -\infty,$ 成立 ; 若 $u$ 有最短路径, 此时由于 $v$ 的最短路径是所有到 $v$ 的路上最短的, 所以不等式成立.

> **Lemma (Upper-bound property)** :  初始化后, 任意松弛后, $v.d \geq \delta(s, v)$ 保持, 且一旦在某时刻, $v.d = \delta(s, v),$ 则此后 $v.d$ 不再改变.

证明 : 对松弛操作的次数进行归纳. 0 次松弛, 明显成立. 假设 $n$ 次松弛后成立, 对于第 $n + 1$ 次松弛, 设松弛 $(u, v)$ 边, 由归纳假设, 在松弛该边之前, $x.d \geq \delta(s, x)$ 对任意 $x \in V$ 成立. 假设松弛后 $v.d$ 没有改变, 则归纳成立, 如果 $v.d$ 改变, 那么 $$
v.d = u.d + w(u, v) \geq \delta(s, u) + w(u, v) \geq \delta(s, v)$$

> **Lemma (No-path property)** : 假设 $s$ 到 $v$ 没有路, 那么 $v.d = \infty$ 始终成立.

证明 : 由上界性质知道 $v.d \geq \delta(s, v) = \infty$ 始终成立.

> **Lemma** : 设 $(u, v) \in E,$ 那么当 $(u, v)$ 边被松弛后, $$v.d \leq u.d + w(u, v)$$

证明 : 由松弛的定义, 未松弛前等式成立, 则松弛不改变 $v.d.$ 如果未松弛前左式大于右式, 则松弛后左式更新为右式.

> **Lemma (Convergence property)** : 假设 $s$ 到 $u$ 加上边 $(u, v)$ 是 $s$ 到 $v$ 的一个最短路, 那么在一个含 松弛边 $(u, v)$ 的松弛过程中, 如果在松弛边 $(u, v)$ 之前 $u.d = \delta(s, u),$ 那么在松弛之后 $v.d = \delta(s, v).$

证明 : 在松弛前等于, 则之后保持不变. 执行松弛操作之后 $$v.d \leq u.d + w(u, v) = \delta(s, u) + w(u, v) = \delta(s, v)$$ 所以 $v.d = \delta(s, v).$

> **Lemma (Path-relaxation property)** : 设  $<v_0, v_1, \cdots, v_k>$ 是 $s$ 到 $v$ 的最短路. 设初始化后, 松弛过程包含这样的子序列  $(v_0, v_1) , \cdots, (v_{k - 1}, v_k),$ 则在这个子序列被操作完之后 $v.d = \delta(s, v).$

证明 : 对松弛到第几条边归纳.
