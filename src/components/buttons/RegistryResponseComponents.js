import { motion, isValidMotionProp } from "framer-motion";
import { useState } from "react";
import {
  Button,
  Flex,
  Input,
  Select,
  FormControl,
  chakra,
  shouldForwardProp,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateRegistry,
  updateAddress,
  updateBoolean,
} from "../../store/slices/indexSlice";
import { DatePicker } from "antd";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const BooleanYesNo = (props) => {
  const dispatch = useDispatch();

  const { registryReport } = useSelector((state) => {
    return {
      registryReport: state.index.registry.registryReport,
    };
  });

  return (
    <div className="boolean-wrapper">
      <div className="boolean-button ">
        <Button
          className="btn"
          onClick={(e) =>
            dispatch(updateBoolean({ ...registryReport, [props.name]: false }))
          }
        >
          No
        </Button>
      </div>
      <div className="boolean-button ">
        <Button
          className="btn"
          onClick={(e) =>
            dispatch(updateBoolean({ ...registryReport, [props.name]: true }))
          }
        >
          Yes
        </Button>
      </div>
    </div>
  );
};

export const DateTime = () => {
  const dispatch = useDispatch();

  const { registryReport } = useSelector((state) => {
    return {
      registryReport: state.index.registry.registryReport,
    };
  });

  const onOk = (value) => {
    dispatch(
      updateRegistry({
        ...registryReport,
        date: value,
      })
    );
    console.log(value);
  };

  return (
    <div>
      <DatePicker
        showTime
        onOk={onOk}
        onChange={(value) =>
          dispatch(updateRegistry({ ...registryReport, date: value }))
        }
      />
    </div>
  );
};

export const DateAndTime = () => {
  const dispatch = useDispatch();

  const { registryReport } = useSelector((state) => {
    return {
      registryReport: state.index.registry.registryReport,
    };
  });

  return (
    <div>
      <Input
        placeholder="Select Date and Time"
        variant="flushed"
        size="md"
        type="datetime-local"
        onChange={(datetime) =>
          dispatch(
            updateRegistry({ ...registryReport, date: datetime.target.value })
          )
        }
      />
    </div>
  );
};

export const FormInput = (props) => {
  const dispatch = useDispatch();

  const { registryReport } = useSelector((state) => {
    return {
      registryReport: state.index.registry.registryReport,
    };
  });

  return (
    <FormControl>
      <FormLabel color="rgb(147,154,236)">
        Desciption of what happened
      </FormLabel>
      <Input
        type="text"
        h={20}
        width={{ base: "20em", md: "20em", lg: "24em" }}
        onChange={(e) =>
          dispatch(
            updateRegistry({ ...registryReport, [props.name]: e.target.value })
          )
        }
        placeholder="Brief description"
      />
    </FormControl>
  );
};

export const Address = () => {
  const dispatch = useDispatch();

  const { incidentAddress } = useSelector((state) => {
    return {
      incidentAddress: state.index.registry.registryReport.incidentAddress,
    };
  });

  return (
    <Flex flexWrap="wrap">
      <FormControl>
        <Input
          size="md"
          variant="flushed"
          placeholder="Address Line"
          name="streetAddress"
          onChange={(e) =>
            dispatch(
              updateAddress({
                ...incidentAddress,
                [e.target.name]: e.target.value,
              })
            )
          }
        />
      </FormControl>

      <FormControl mt={2}>
        <Input
          size="md"
          variant="flushed"
          placeholder="City"
          name="city"
          onChange={(e) =>
            dispatch(
              updateAddress({
                ...incidentAddress,
                [e.target.name]: e.target.value,
              })
            )
          }
        />
      </FormControl>
      <Flex flexWrap="nowrap">
        <FormControl mt={2}>
          <Select
            size="md"
            variant="flushed"
            w={24}
            placeholder="Select state"
            name="state"
            onChange={(e) =>
              dispatch(
                updateAddress({
                  ...incidentAddress,
                  [e.target.name]: e.target.value,
                })
              )
            }
          >
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhose Island">Rhose Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </Select>
        </FormControl>
        <FormControl mt={2} pl={0}>
          <Input
            size="md"
            variant="flushed"
            w={24}
            placeholder="Zipcode"
            name="zipcode"
            onChange={(e) =>
              dispatch(
                updateAddress({
                  ...incidentAddress,
                  [e.target.name]: e.target.value,
                })
              )
            }
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export const FullNameAndTitle = (props) => {
  const dispatch = useDispatch();

  const { registryReport } = useSelector((state) => {
    return {
      registryReport: state.index.registryReport,
    };
  });

  return (
    <div>
      <FormControl>
        <Input
          variant="flushed"
          name="fullName"
          placeholder="Full Name"
          width={{ base: "12em", md: "14em", lg: "20em" }}
          onChange={(e) =>
            dispatch(
              updateRegistry({
                ...registryReport,
                [e.target.name]: e.target.value,
              })
            )
          }
        />
      </FormControl>

      <FormControl mt={3}>
        <Input
          variant="flushed"
          name="title"
          placeholder="Job Title"
          onChange={(e) =>
            dispatch(
              updateRegistry({
                ...registryReport,
                [e.target.name]: e.target.value,
              })
            )
          }
        />
      </FormControl>
    </div>
  );
};

export const GenderSelect = () => {
  const dispatch = useDispatch();

  const { registryReport } = useSelector((state) => {
    return {
      registryReport: state.index.registryReport,
    };
  });

  return (
    <div className="genderSelect">
      <Button
        className="btn genderBtn"
        onChange={() =>
          dispatch(
            updateRegistry({
              ...registryReport,
              assailantGender: "male",
            })
          )
        }
      >
        Male
      </Button>
      <Button
        className="btn genderBtn"
        onChange={() =>
          dispatch(
            updateRegistry({
              ...registryReport,
              assailantGender: "female",
            })
          )
        }
      >
        Female
      </Button>
      <Button
        className="btn genderBtn"
        onChange={() =>
          dispatch(
            updateRegistry({
              ...registryReport,
              assailantGender: "non-binary",
            })
          )
        }
      >
        Non-Binary
      </Button>
      <Button
        className="btn genderBtn"
        onChange={() =>
          dispatch(
            updateRegistry({
              ...registryReport,
              assailantGender: "unknown",
            })
          )
        }
      >
        Unknown
      </Button>
    </div>
  );
};

export const EthnicitySelect = () => {
  const dispatch = useDispatch();

  const { registryReport } = useSelector((state) => {
    return {
      registryReport: state.index.registryReport,
    };
  });
  return (
    <div>
      <FormControl mt={2}>
        <Select
          size="md"
          placeholder="Ethnicity"
          name="raceEthnicity"
          onChange={(e) =>
            dispatch(
              updateRegistry({
                ...registryReport,
                raceEthnicity: e.target.value,
              })
            )
          }
        >
          <option value="white">White</option>
          <option value="black/african">Black or African American</option>
          <option value="americanIndian/alaskanNative">
            American Indian or Alaskan Native
          </option>
          <option value="hawaiian/pacificIslander">
            Native Hawaiian or Pacific Islander
          </option>
          <option value="asian">Asian</option>
          <option value="hispanic/latino">Hispanic or Latino</option>
        </Select>
      </FormControl>
    </div>
  );
};
