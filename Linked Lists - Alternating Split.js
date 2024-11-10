function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  if (!head || !head.next) throw new Error('invalid arguments')
  return new Context(split(head), split(head.next))
}

function split(head) {
  const list = new Node(head.data)
  if (head.next && head.next.next) list.next = split(head.next.next)
  return list
}
