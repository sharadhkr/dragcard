import csv

def generate_csv(input_text):
    parts = input_text.split(".")

    qty = int(parts[0])
    title = parts[1]
    barcode = parts[2]
    price = parts[3]

    with open("data.csv", "w", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["title", "barcode", "price"])

        for _ in range(qty):
            writer.writerow([title, barcode, price])

generate_csv("2.VEREV.DLHHO20126.1249")