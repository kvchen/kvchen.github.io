class Pet(object):
    def __init__(self, name, owner):
        self.is_alive = True  # it's alive
        self.name = name
        self.owner = owner

    def eat(self, thing):
        print(self.name + " ate a " + str(thing) + "!")

    def talk(self):
        print(self.name)


class Dog(Pet):
    def __init__(self, name, owner, color):
        Pet.__init__(self, name, owner)
        self.color = color

    def talk(self):
        print(self.name + ' says woof!')


class Cat(Pet):
    def __init__(self, name, owner, lives=9):
        pass

    def talk(self):
        """A cat says meow! when asked to talk."""
        pass

    def lose_life(self):
        """A cat can only lose a life if they have at least one life. When
        lives reaches zero, 'is_alive' becomes False.
        """
        pass

