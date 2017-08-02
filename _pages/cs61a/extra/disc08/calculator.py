from pair import Pair
from operator import add, mul
from functools import reduce


def calc_eval(exp):
    if not isinstance(exp, Pair):  # primitive expression
        return exp
    else:  # call expression

        # Step 1: evaluate the operator.
        operator = exp.first

        # Step 2: evaluate the operands
        operands = exp.second
        args = operands.map(calc_eval).to_py_list()

    # Step 3: apply the operator to the operands.
    return calc_apply(operator, args)


def calc_apply(operator, args):
    if operator == '+':
        return sum(args)
    elif operator == '-':
        if len(args) == 1:
            return -args[0]
        else:
            return args[0] - sum(args[1:])
    elif operator == '*':
        return reduce(mul, args, 1)
