from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

CHROME_DRIVER_PATH = 'C:\Program Files\chromedriver-win64\chromedriver.exe'

def scrap_cbb():

    service = Service(executable_path=CHROME_DRIVER_PATH)
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    options.add_argument('--headless')
    driver = webdriver.Chrome(service=service, options=options)

    driver.get('https://www.sports-reference.com/cbb/players/stephen-curry-1.html')

    player_name = driver.find_element(By.XPATH, '/html/body/div[@id="wrap"]/div[@id="info"]/div/div/h1/span')

    print(player_name.text)

    player_basic_stats = driver.find_element(By.XPATH, '/html/body/div[@id="wrap"]/div[@id="content"]/div[@id="all_players_per_game"]/div[@id="switcher_players_per_game"]/div/table/tbody/tr[last()]')

    print(player_basic_stats.text)

    driver.quit()

scrap_cbb()