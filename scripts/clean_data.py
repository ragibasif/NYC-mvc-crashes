import pandas as pd

def clean_data(input_file, output_file):
    try:
        # Read the CSV file
        df = pd.read_csv(input_file)

        # Select specific columns
        selected_columns = ['CRASH DATE', 'CRASH TIME', 'BOROUGH', 'LOCATION']
        df_cols = df[selected_columns]

        # Drop rows with NaN in any column
        df_cleaned = df_cols.dropna()

        # Reset the index after filtering
        df_cleaned = df_cleaned.reset_index(drop=True)

        # Display the first few rows
        print(df_cleaned.head())

        # Save the cleaned data to a new CSV file
        df_cleaned.to_csv(output_file, index=False)
        print(f"Cleaned data saved to {output_file}")

    except FileNotFoundError:
        print(f"Error: File not found at {input_file}")
    except KeyError as e:
        print(f"Error: Missing expected column in the dataset: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    # Define file paths
    input_file = '../data/raw/Motor_Vehicle_Collisions___Crashes_20250123.csv'
    output_file = '../data/clean/mvc_crashes.csv'

    # Call the function
    clean_data(input_file, output_file)

