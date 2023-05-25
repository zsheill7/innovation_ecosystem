import csv
from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="http")

def get_lat_long(address):
    try:
        location = geolocator.geocode(address)
        return location.latitude, location.longitude
    except:
        return None, None

input_file = '../data/innovation_ecosystem.csv'
output_file = '../data/innovation_ecosystem_with_latlong.csv'

with open(input_file, 'r') as infile, open(output_file, 'w', newline='') as outfile:
    reader = csv.reader(infile)
    writer = csv.writer(outfile)

    header = next(reader)
    header.extend(['Latitude', 'Longitude'])
    writer.writerow(header)

    location_index = header.index("Location")

    for row in reader:
        location = row[location_index]
        lat, long = get_lat_long(location)
        row.extend([lat, long])
        writer.writerow(row)