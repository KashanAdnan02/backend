import Activity from "../model/activityLogs.js"



export const create = async (req, res) => {
    try {

        const { status } = req.body
        const logs = await Activity.create(req.body)
        return res.status(201).json({
            message: `User is ${status} `,
            logs
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
import mongoose from 'mongoose';

export const getUserAttendence = async (req, res) => {
  try {
    const { id } = req.params;

    const logs = await Activity.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(id),
          status: "present"
        }
      },
      {
        $project: {
          date: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
          }
        }
      },
      {
        $group: {
          _id: "$date"
        }
      },
      {
        $count: "totalAttendanceDays"
      }
    ]);

    const totalAttendanceDays = logs[0]?.totalAttendanceDays || 0;

    return res.status(200).json({
      message: `User was present on ${totalAttendanceDays} day(s).`,
      userId: id,
      totalAttendanceDays
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

  