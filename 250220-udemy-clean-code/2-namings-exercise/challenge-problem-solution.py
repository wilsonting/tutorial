class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, origin, width, height):
        self.origin = origin
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.width * self.height

    def print_coordinate(self):
        top_right = self.origin.x + self.broad
        bottom_left = self.origin.y + self.high
        print('Starting Point (X)): ' + str(self.origin.x))
        print('Starting Point (Y)): ' + str(self.origin.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def build_rectangle():
    reactangle_origin = Point(50, 100)
    rectangle = Rectangle(reactangle_origin, 90, 10)

    return rectangle


rectangle = build_rectangle()

print(rectangle.area())
rectangle.print_coordinate()