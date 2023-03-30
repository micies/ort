from pydantic import BaseModel, validator
import re


class Users(BaseModel):
    """This class is validator for types of users

    Args:
        BaseModel object: inheritance from BaseModel class  with methods to validate   
    """    
        
    Name: str
    Phone: str
    IP: str

    @validator('Phone')
    def validate_phone(cls:object, phone_number:str)->str:
        """This function is validate phone number

        Args:
            phone_number str: phone number to validate

        Raises:
            ValueError: if phone_number is not valid

        Returns:
            str: phone number after successful validation
        """     
        pattern = r"\+\d{3}-\d{9}"
        if match := re.search(pattern, phone_number):
            return phone_number
        else:
            raise ValueError("Invalid email address")



    @validator('IP')
    def validate_ip(cls: object, ip: str)->str:
        """AThis function is validate for ip address

        Args:
            ip str: ip address to validate

        Raises:
            ValueError: if ip address is not valid
        Returns:
            str: ip address after successful validation
        """        
        pattern = r"^(\d{1,3}\.){3}\d{1,3}$"
        if match := re.search(pattern, ip):
            return ip
        else:
            raise ValueError("Invalid email address")








