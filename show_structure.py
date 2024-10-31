import os

def print_directory_tree(startpath, indent_level=0):
    for item in os.listdir(startpath):
        item_path = os.path.join(startpath, item)
        if os.path.isdir(item_path):
            print('    ' * indent_level + f'{item}/')
            print_directory_tree(item_path, indent_level + 1)
        else:
            print('    ' * indent_level + f'{item}')


base_directory = os.path.dirname(os.path.abspath(__file__))
print(f"Project directory structure for: {base_directory}\n")
print_directory_tree(base_directory)