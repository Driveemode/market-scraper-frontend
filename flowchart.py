from matplotlib import pyplot as plt
from matplotlib.patches import FancyBboxPatch, Arrow

# Function to create a basic block in the flowchart
def add_block(ax, text, x, y, width=2, height=1, fontsize=10):
    rect = FancyBboxPatch(
        (x - width / 2, y - height / 2),
        width, height,
        boxstyle="round,pad=0.3",
        edgecolor="black",
        facecolor="white"
    )
    ax.add_patch(rect)
    ax.text(x, y, text, ha="center", va="center", fontsize=fontsize)
    return rect

# Function to create an arrow between blocks
def add_arrow(ax, x1, y1, x2, y2):
    arrow = Arrow(x1, y1, x2 - x1, y2 - y1, width=0.2, color="black")
    ax.add_patch(arrow)

# Initialize the figure and axis
fig, ax = plt.subplots(figsize=(10, 8))
ax.set_xlim(0, 10)
ax.set_ylim(0, 15)
ax.axis("off")

# Adding blocks to represent the flowchart
blocks = {}
blocks["Start"] = add_block(ax, "Start (User Input)", 5, 14)
blocks["Parameters"] = add_block(ax, "Enter Scraping Parameters", 5, 12)
blocks["Backend"] = add_block(ax, "Send to Backend", 5, 10)
blocks["Redis"] = add_block(ax, "Schedule Tasks in Redis", 5, 8)
blocks["Scraping"] = add_block(ax, "Execute Scraping", 5, 6)
blocks["DataCleaning"] = add_block(ax, "Clean & Normalize Data", 5, 4)
blocks["StoreData"] = add_block(ax, "Store in MongoDB", 5, 2)
blocks["End"] = add_block(ax, "Request Visualization or Export", 5, 0)

# Adding arrows to connect the blocks
add_arrow(ax, 5, 13.5, 5, 12.5)  # Start -> Parameters
add_arrow(ax, 5, 11.5, 5, 10.5)  # Parameters -> Backend
add_arrow(ax, 5, 9.5, 5, 8.5)    # Backend -> Redis
add_arrow(ax, 5, 7.5, 5, 6.5)    # Redis -> Scraping
add_arrow(ax, 5, 5.5, 5, 4.5)    # Scraping -> DataCleaning
add_arrow(ax, 5, 3.5, 5, 2.5)    # DataCleaning -> StoreData
add_arrow(ax, 5, 1.5, 5, 0.5)    # StoreData -> End

# Save the figure
output_path = "C:\Sunil\learning\Webscraping\market-scraper\Market_Scraper_Flowchart.png"
plt.savefig(output_path, bbox_inches="tight")
plt.show()

output_path
