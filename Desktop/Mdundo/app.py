from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# Specify the path to your WebDriver executable
chrome_options = webdriver.ChromeOptions()
# Create a new instance of the Chrome driver
driver = webdriver.Chrome(options=chrome_options)


# Navigate to the login page
driver.get("https://mdundo.com/in/login")

username_input = driver.find_element(By.NAME, "email")
password_input = driver.find_element(By.NAME, "password")
login_button = driver.find_element(By.CLASS_NAME, "btn-v2")
# Input your login credentials and submit the form
username_input.send_keys("nguyenbranden57@gmail.com")
password_input.send_keys("superstrikas9802")
login_button.click()

# Wait for the login process to complete (you may need to adjust the wait time)
driver.implicitly_wait(10)

# Navigate to the music tab (replace with the actual link or button on the website)
music_tab = driver.find_element(By.XPATH, "//a[@href='https://mdundo.com/in/music/346700/']")
music_tab.click()

# Collect all links on the page
all_links = driver.find_elements(By.TAG_NAME, "a")

# Extract and save the modified links into a text file
output_file_path = "downloads.txt"
with open(output_file_path, "w") as file:
    for link in all_links:
        href = link.get_attribute("href")
        if href and "https://mdundo.com/song/" in href:
            modified_link = href.replace("https://mdundo.com/song/", "https://mdundo.com/dl/")
            file.write(modified_link + "\n")

# Close the browser window
driver.quit()