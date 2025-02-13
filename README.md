# NYC Vehicle Crash Analysis

[![Netlify Status](https://api.netlify.com/api/v1/badges/5db35742-1c15-46d0-ab3f-86bcb404fd00/deploy-status)](https://app.netlify.com/sites/nyc-car-crashes/deploys)


This project is an analysis of NYC vehicle crash data, focusing on the trend of crashes over time. Using Python and powerful data visualization libraries, this project aims to uncover patterns in crash occurrences and identify key insights.

## Project Overview

### Objective

The primary goal of this project is to analyze the trend of vehicle crashes in New York City over time using historical crash data.

### Data Source

The analysis is conducted using the NYC [Motor Vehicle Collisions - Crashes](https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95/about_data) dataset, which includes detailed records of crashes reported in NYC. The dataset provides information such as:

- Crash date and time
- Borough
- Location (latitude/longitude)
- Number of injuries and fatalities

## Key Features

- **Data Cleaning:**
  - Handled missing and inconsistent data.
  - Formatted date and time fields for temporal analysis.

- **Data Analysis:**
  - Analyzed crash trends over time (daily, monthly, yearly).
  - Grouped data by weekdays and boroughs to identify patterns.

- **Visualization:**
  - Line plots to show crash trends over time.
  - Heatmaps to identify crash density by time and location.
  - KDE plots to visualize crash occurrence patterns.


## Technologies Used

- **Programming Language:** Python
- **Web Technologies:** JavaScript, HTML/CSS
- **Libraries:**
  - Pandas: Data manipulation and analysis.
  - Seaborn & Matplotlib: Data visualization.

## Example Visualizations

Below are some examples of the visualizations produced:

- **Line Plot of Crashes Over Time:**
  A time series plot showing the trend of crashes.

- **Heatmap of Crash Counts by Day and Hour:**
  A heatmap highlighting hours with higher crash occurrences.


## Insights Gained

- Temporal patterns in crash occurrences, such as peaks on specific days or times.
- Borough-specific trends, highlighting areas with consistently high crash rates.


## Future Work

- Incorporate more granular location data for neighborhood-level analysis.
- Explore external factors (e.g., weather conditions, traffic patterns).
- Predict future trends using machine learning.


## Contributing

Contributions are welcome! Please submit a pull request or open an issue for suggestions and improvements.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Acknowledgments

Thanks to the NYC Open Data portal for providing the dataset used in this analysis.
