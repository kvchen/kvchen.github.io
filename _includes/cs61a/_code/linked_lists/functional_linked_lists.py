{% raw %}
# Functional pairs

def cons(a, b):
    def pair(m):
        if m == 'car':
            return a
        else:
            return b
    return pair

def car(p):
    return p('car')

def cdr(p):
    return p('cdr')


# Implementation of linked lists using cons

empty = lambda: 42

def link(element, lst):
    return cons(element, lst)

def first(lst):
    return car(lst)

def rest(lst):
    return cdr(lst)

def linked_list_to_string(lst):
    s = '<'
    while lst != empty:
        s = s + repr(first(lst)) + ' '
        lst = rest(lst)
    return s[:-1] + '>'
{% endraw %}