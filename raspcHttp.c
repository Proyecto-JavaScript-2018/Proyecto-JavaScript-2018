#include <stdio.h>
#include <wiringPi.h>
#define GAS_PIN 19

int main(void)
{


  wiringPiSetupGpio();
  pinMode(GAS_PIN, INPUT);

   CURL *curl;
  CURLcode res;
  curl_global_init(CURL_GLOBAL_ALL);
  curl = curl_easy_init();
  
  while (1)
  {

    

    if (digitalRead(GAS_PIN) == LOW)
    {
      
      printf("Gas Detected");
      printf("\n");
      if (curl)
      {
        curl_easy_setopt(curl, CURLOPT_URL, "http://10.42.0.6:1338/gas");
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, "estado=Gas Detected");
        res = curl_easy_perform(curl);
        if (res != CURLE_OK)
      fprintf(stderr, "curl_easy_perform() failed: %s\n",
              curl_easy_strerror(res));
              curl_easy_cleanup(curl);
          }
    }
    else
    {
      printf("Cool Enviroment");
      printf("\n");
    }
    delay(2000);
    
      curl_global_cleanup();
  }


  return 0;
}
