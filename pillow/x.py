from PIL import Image
import random

# Define the colors
colors = [(0, 0, 0), (169, 169, 169), (105, 105, 105)]  # Black, Gray, Dark Gray

# Image size
width, height = 512, 512

# Create a new image with white background
image = Image.new('RGB', (width, height), (255, 255, 255))

# Get the pixel data
pixels = image.load()

# Fill the image with random color blocks
for i in range(width):
    for j in range(height):
        # Randomly choose a color
        pixels[i, j] = random.choice(colors)

# Save the generated image
image.save('random_blocks.png')

# Show the image (optional)
image.show()
